'use strict';

var alconfig = require('../alconfig')();
var mongoose = require('mongoose');

mongoose.connect(alconfig.mongodb.uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'error : mogodb'));
db.once('open', function() {
	console.log('mogodb open : ' + alconfig.mongodb.uri);
});

module.exports = db;