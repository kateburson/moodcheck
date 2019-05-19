var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MoodSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  high: { type: String, required: true },
  low: { type: String, required: true },
  medication: { type: Boolean },
  exercise: { type: Boolean },
  date: { type: Date, default: Date.now }
});

var Mood = mongoose.model("mood", MoodSchema);

module.exports = Mood;