var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var JournalSchema = new Schema({
  title: String,
  body: String
});

var Journal = mongoose.model("Journal", JournalSchema);

module.exports = Journal;
