const db = require("../models");
var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  login: function(req, res) {
    db.User.find({ email: req.body.email })
    .then(u => {
      console.log(u ,Boolean(!u[0].email));
      console.log("name:", u[0].name);
      if (!u[0].email) {
        res.status(400).send({ msg: 'Invalid Email or Password' });
      } else {
        console.log("u.password:", u[0].password);
        bcrypt.compare(req.body.password, u[0].password, function(err, bRes) {
          console.log(bRes);
          if (!bRes) {
            console.log('this one')
            res.status(400).send({ msg: 'Invalid Email or Password' });
          } else {
          var token = jwt.sign({ email: u.email }, 'shhhhh');
          res.json({ id: u[0].id, email: u[0].email, name: u[0].name, token: token });
          }
        }).catch(error => console.log(error))
      }
    });
  },
  register: function(req, res) {
    db.User.find({ email: req.body.email })
    .then(u => {
      console.log("u:", u, Boolean(u.email));
      if (u.email) res.status(400).send({ msg: 'Invalid Email or Password' });
      else {
        bcrypt.genSalt(saltRounds, function(err, salt) {
          bcrypt.hash(req.body.password, salt, function(err, hash) {
            db.User.create({
              name: req.body.name,
              email: req.body.email,
              password: hash,
            }).then(function(user) {
              var token = jwt.sign({ email: user.email }, 'shhhhh');
              res.json({ email: user.email, token: token });
            });
          });
        });
      } 
    });
  },
  validateToken: function(req, res) {
    return jwt.verify(req.body.token, 'shhhhh', function(err, decoded) {
      if (err) {
        return res.status(400).send({ msg: 'your token is bad!' });
      }
      return db.User.find({ email: decoded.email}).then(u =>
        res.status(200).send({ email: u.email })
      );
    });
  }
  
};
