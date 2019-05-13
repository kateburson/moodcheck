const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Defining methods for the booksController
module.exports = {
  login: function(req, res) {
    const password = req.body.password;
    bcrypt.compare(password, hash, function(err, res) {
      if(res === true) {
        db.User
        .findOne({email: req.body.email})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      } else {
        res.json("incorrect password");
      }  
    });
    
  },
  register: function(req, res) {
    const password = req.body.password;
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        const newUser = {
          name: req.body.name,
          email: req.body.email,
          password: hash
        }
        db.User
        .create(newUser)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      });
    });
    
  }
};
