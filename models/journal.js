var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var JournalSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: { type: String },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

var Journal = mongoose.model("journal", JournalSchema);

module.exports = Journal;
