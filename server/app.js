// Arquivo que monta as configurações padrões de servidor, requisições, configura o MongoDB e exibe erros

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Usa o Mongo com o pacote Create Express Server
// O MongoDB precisa estar rodando como serviço, antes de iniciar o servidor
// Se o banco de dados não existir com esse nome, ele será criado e populado quando o lado cliente fizer o primeiro POST 
var mongo = require('mongodb').MongoClient;
var routes = require('./routes/index');
var app = express();

// Usa o Jade como framework de view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Coloca um favicon no ícone das janelas de servidor (pasta /public)
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Especifica o local que é permitido enviar requisições via POST (corrige o CORS)
app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "https://nexa-digital.appspot.com");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Faz o banco de dados Mongo acessível para o nosso Router
app.use(function(req,res,next){
  const uri = "mongodb+srv://nexa:7G6C7XULCAIwPEYY@nexa-digital-qlbrd.gcp.mongodb.net/test?retryWrites=true";
  const client = new mongo(uri);

  client.connect((err, db) => {
    if (err) throw err; 
    const collection = client.db("test").collection("devices");
    req.collection = collection;
    req.client = client;
    next();

  });
});

app.use('/', routes);


// Recebe o Erro 404 e envia para o error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // configura o locals, somente administrando os erros durante o desenvolvimento
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // renderiza a página de erro
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;