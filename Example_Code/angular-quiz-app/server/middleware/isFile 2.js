var fs = require('fs');
var config = require('../config/base');

module.exports = function isFile(req, res, next) {
    fs.stat(config.publicDir + req.url, function(err, stats) {
        req.isFile = stats && stats.isFile();
        next();
    });
}
