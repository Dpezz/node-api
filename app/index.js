var fs = require('fs');
var path = require('path');
var basename = path.basename(__filename);
var dir = path.join(__dirname, 'controllers');

var namespace = './controllers/';
var controllers = {};

fs
    .readdirSync(dir)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var file = file.replace('.js', '');
        controllers[file] = require(namespace + file);
    });

module.exports = controllers;