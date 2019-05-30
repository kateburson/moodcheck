const db = require("../models");

module.exports = {
  populateJournal: function(req, res) {
    db.User
    .findOne({ _id : req.params.id })
    .populate({
      path:"journal",
      model: "journal"
    })
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }, 
  newEntry: function(req, res) {
    db.Journal.create(req.body)
    .then(function(data) {
      db.User.updateOne({_id : req.params.id}, {$push: {journal: data._id}})
      .then(dbModel => res.json(dbModel))
    })
    .catch(err => res.status(422).json(err));
  },
  updateJournal: function(req, res) {
    db.Journal
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeJournal: function(req, res) {
    db.Journal
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  journalByDate : function(req, res) {
    db.Journal
      .findOne({date: req.params.date})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
