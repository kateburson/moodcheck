const router = require("express").Router();
const moodController = require("../../controllers/moodController");

// populating user's journal entries
// Matches with "/api/mood/:id"
router.route("/:id")
  .get(moodController.findMoods)
  .post(moodController.newMood)
  .put(moodController.updateMood)
  .delete(moodController.removeMood)

module.exports = router