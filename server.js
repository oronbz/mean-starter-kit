// modules ================================================
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var morgan = require('morgan'); // replaces express.logger
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');

// configuration ==========================================
var db = require('./app/config/db');
var port = process.env.PORT || 3000;

mongoose.connect(db.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser());
app.use(session({secret: 'pink fluffy unicorns'}));
app.use(passport.initialize());
app.use(passport.session());

// routes =================================================
require('./app/routes')(app);

// start app ==============================================
app.listen(port);
console.log('Listening on port: ' + port);

// exports ================================================
module.exports = app;