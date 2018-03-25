var express = require('express');
var app = express();
var admin = require('firebase-admin');
var logger = require('morgan');
var path = require('path');
var main = require('./route/main');
var index = require('./route/index');
var loading = require('./route/loading')
var bodyParser = require('body-parser');
var session = require('express-session');
var addPad = require('./route/addPad');
var devices = require('./route/devices');

require('dotenv').load();

//View Engine Setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.set('firebase', admin);

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:'Test1234'}));

app.get('/', index.view);

app.post('/addPad', addPad.addPad);

module.exports = app;