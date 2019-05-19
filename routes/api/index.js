const router = require("express").Router();
const userRoutes = require("./users");
const journalRoutes = require("./journal");
const moodRoutes = require("./mood");

router.use("/users", userRoutes);
router.use("/journal", journalRoutes);
router.use("/mood", moodRoutes);

module.exports = router;
