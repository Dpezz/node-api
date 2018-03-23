var fs = require('fs');
var path = require('path');
var basename = path.basename(__filename);

var files = {};

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var file = file.replace('.js', '');
        files[file] = require('./' + file);
    });

module.exports = files;