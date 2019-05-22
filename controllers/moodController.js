const db = require("../models");

module.exports = {
  findMoods: function(req, res) {
    db.User
    .findOne({ _id : req.params.id })
    .populate({
      path:"mood",
      model: "mood"
    })
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  newMood: function(req, res) {
    db.Mood.create(req.body)
    .then(function(data) {
      db.User.updateOne({_id : req.params.id}, {$push: {mood: data._id}})
      .then(dbModel => res.json(dbModel))
    })
    .catch(err => res.status(422).json(err));
  },
  updateMood: function(req, res) {
    db.Mood
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeMood: function(req, res) {
    db.Mood
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
