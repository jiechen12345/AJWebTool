'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    message: {
        type:String,
        default: ''
    },
    reader: {
        type:[String],
        // required: 'Please fill reader'
    },
    member: {
        type:[String],
        required: 'Please fill member'
    },
    sender: {
        type:String,
        required: 'Please fill sender'
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