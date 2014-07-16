var app = require('../app');

var routes = {};

// GET home page
routes.index = function (req, res) {
    res.sendfile(app.get('views') + '/index.html');
};

// GET normalize.css
routes.normalizecss = function (req, res) {
    res.sendfile(app.get('node_modules') + '/normalize.css/normalize.css');
};

// GET 404 page
routes.fileNotFound = function (req, res) {
    res.sendfile(app.get('views') + '/status/404.html');
};

module.exports = routes;