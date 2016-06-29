'use strict';
var path = require('path');

var CLASS = prop => {
	this.PORT = process.env.PORT || 8003;
    this.publicDir = path.normalize(__dirname + '/../../public/');
    this.domainUploadDir = 'upload/';
    this.uploadDir = this.publicDir + this.domainUploadDir;

    //mongodb
    this.mongodb = new (function() {
        this.user = 'AJWebTool';
        this.password = 'AJWebTool';
        this.database = 'AJWebTool';
        this.host = 'localhost';
        this.port = 27017;
        this.uri = 'mongodb://' + this.user + ':' + this.password + '@' + this.host + ':' + this.port + '/' + this.database;

        return this;
    })();

	return this;
};

module.exports = CLASS;
