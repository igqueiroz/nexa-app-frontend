// Arquivo que cria as rotas manipula as interações do usuário com o banco Express
// Cria as APIS consumíveis e retorna ao usuário dados de consulta do banco 

var express = require('express');
var router = express.Router();
var assert = require('assert');

//Cria a API de lista de usuários coletados
router.get('/userlist', (req, res) => {
    req.collection.count(function (err, count) {
      if (err) throw err;            
      console.log('Total Linhas na coleção : ' + count);
    });
    req.collection.find({}).toArray(function(err, result) {
      if (err) throw err;
      res.status(200).send(result);
    });
    req.client.close();
});

// Permite a interação via POST, recebe os dados da App e envia para o servidor MongoDB
router.post('/userlist', (req, res) => {
	const name = req.body.newName;
	const email = req.body.newEmail;
	const userLocationLat = req.body.newUserLocationLat;
	const userLocationLng = req.body.newUserLocationLng;
	const userDevice = req.body.newUserDevice;
	const userRange = req.body.newRange;
	const universityLat = req.body.newUniversityLat;
	const universityLng = req.body.newuniversityLng;
	
	// Quando tiver validação de dados no lado do servidor, colocar nesse espaço
	// Insere os dados coletados via POST vindos da App no nosso banco 
	req.collection.insert({
		'name': name,
		'email': email,
		'userLocationLat': userLocationLat,
		'userLocationLng': userLocationLng,
		'userDevice': userDevice,
		'userRange': userRange,
		'universityLat': universityLat,
		'universityLng': universityLng
	})
});
   
module.exports = router;
