var utils = require('./utils.js');
var app = utils.createApp();
var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/apps/chrome/'));
app.get('/callback.html', function (req, res) {

    var index = fs.readFileSync(__dirname + '/apps/chrome/callback.html');
    res.write(index);
    res.end();
});
app.get('/*', function (req, res) {

    var index = fs.readFileSync(__dirname + '/apps/chrome/index.html');
    res.write(index);
    res.end();
});

module.exports = {
    server: app
};