'use strict';

var mongoose = require('mongoose');
var collection = 'member';
var schema = require('../schema/' + collection);
var model = mongoose.model(collection, schema, collection);

module.exports = model;