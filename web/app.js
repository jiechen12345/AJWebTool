'use strict';
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var alconfig = require('./lib/alconfig')();
var swig = require("swig");
var router = require("./router");
var almongoose = require("./lib/almongoose");

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

app.use('/', router);

http.listen(alconfig.PORT, function(){
    console.log('listening on *:' + alconfig.PORT);
});
