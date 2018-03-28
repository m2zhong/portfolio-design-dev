var express = require('express');
var app = express();
var logger = require('morgan');
var path = require('path');
var index = require('./route/index');
var uix = require('./route/uix');
var software = require('./route/software');
var about = require('./route/about');
var bodyParser = require('body-parser');

require('dotenv').load();

//View Engine Setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', index.view);
app.get('/uix', uix.view);
app.get('/software', software.view);
app.get('/about', about.view);

module.exports = app;