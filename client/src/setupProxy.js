const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('http://localhost:3002/api', { target: 'http://localhost:3002/'}));
};