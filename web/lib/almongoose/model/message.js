'use strict';

var mongoose = require('mongoose');
var collection = 'message';
var schema = require('../schema/' + collection);
var model = mongoose.model(collection, schema, collection);

module.exports = model;