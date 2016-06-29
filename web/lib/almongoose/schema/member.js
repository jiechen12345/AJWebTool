'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    // fbID: {
    //     type:String,
    //     required: 'Please fill fbID'
    // },
    // fbName: {
    //     type:String,
    //     required: 'Please fill fbName'
    // },
    // fbEmail: {
    //     type:String,
    //     required: 'Please fill fbEmail'
    // },
    email: {
        type:String,
        required: 'Please fill email'
    },
    password: {
        type:String,
        required: 'Please fill password'
    },
    pic: {
        type:String,
    },
    created: {
        type: Date,
    },
    modified: {
    	type: Date,
    	default: Date.now
    }
});

module.exports = schema;