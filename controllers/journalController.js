const db = require("../models");

module.exports = {
  populateJournal: function(req, res) {
    const id = req.params.id;
    db.User
    .findOne({_id : id})
    .populate('Journal')
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  newEntry: function(req, res) {
    db.Journal.create(req.body)
    .then(function(data) {
      db.User.update({_id : req.params.id}, {$push: {journal: data._id}})
      .then(function(dbModel) {
        res.json(dbModel);
      })
    })
    .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Journal
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Journal
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
