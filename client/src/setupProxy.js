const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy('/api', { target: "http://localhost:3002/" || "https://peaceful-wildwood-71736.herokuapp.com/"}));
};