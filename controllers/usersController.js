const db = require("../models");
var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  login: function(req, res) {
    db.User.find({ email: req.body.email }).then(u => {
      if (!u) {
        res.status(400).send({ msg: 'Invalid Email or Password' });
      } else {
        bcrypt.compare(req.body.password, u.password, function(err, bRes) {
          if (!bRes) {
            res.status(400).send({ msg: 'Invalid Email or Password' });
          } else {
          var token = jwt.sign({ email: u.email }, 'shhhhh');
          res.json({ email: u.email, token: token });
          }
        });
      }
    });
  },
  register: function(req, res) {
    db.User.find({ email: req.body.email }).then(u => {
      if (u) res.status(400).send({ msg: 'Invalid Email or Password' });
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
          db.User.create({
            email: req.body.email,
            password: hash,
          }).then(function(user) {
            var token = jwt.sign({ email: user.email }, 'shhhhh');
            res.json({ email: user.email, token: token });
          });
        });
      });
    });
  },
  validateToken: function(req, res) {
    return jwt.verify(req.body.token, 'shhhhh', function(err, decoded) {
      if (err) {
        return res.status(400).send({ msg: 'your token is bad!' });
      }
      return db.User.find({ email: decoded.email}).then(u =>
        res.status(200).send({user: u}));
    });
  }
};
