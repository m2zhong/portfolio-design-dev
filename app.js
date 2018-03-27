var express = require('express');
var app = express();
var logger = require('morgan');
var path = require('path');
var index = require('./route/index');
var bodyParser = require('body-parser');

require('dotenv').load();

//View Engine Setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', index.view);

module.exports = app;