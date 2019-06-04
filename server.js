const express = require("express");

const mongoose = require("mongoose");
const mongoURI = require("./config/keys");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3002;
const httpProxy = require('http-proxy-middleware');

app.use('/api', httpProxy({
  logLevel     : 'debug',
  target       : API_SERVER,
  changeOrigin : true,
  secure       : false,
  xfwd         : true,
  router: {
      '/api/auth/login': `${API_SERVER}/auth/login`
  },
  onProxyReq   : function (proxyReq, req, res) {
      // Browers may send Origin headers even with same-origin
      // requests. To prevent CORS issues, we have to change
      // the Origin to match the target URL.
      if (proxyReq.getHeader('origin')) {
          proxyReq.setHeader('origin', API_SERVER);
      }
  }
}));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
