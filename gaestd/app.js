// These are the Node.js modules used for this Express app.
// They are installed using NPM
const express = require('express');
const cors = require("cors");
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


// This creates the Express app which is configured below.  
const app = express();

const options = {};
// const bundler = new Bundler(file, options);

// app.use(bundler.middleware());
// Set up the view engine.
// Views are in a folder called "views"
// Handlebars (hbs) is used for the templating engine.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Standard Express stuff
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
// This configures the routes.
// Requests for the root folder are handled by the index module.
// Requests for the /api/conversions route are handle by the 
// conversions module.
// These modules were added above.

// All other requests are handled by the index module
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Important later!  This exports the app object as a module.
// This comes into play when we deploy the application to 
// Cloud Functions.
module.exports = app;