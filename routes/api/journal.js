const router = require("express").Router();
const journalController = require("../../controllers/journalController");

// populating user's journal entries
// Matches with "/api/journal/:id"
router.route("/:id")
  .get(journalController.populateJournal)
  .post(journalController.newEntry)
  .put(journalController.update)
  .delete(journalController.remove)

module.exports = router