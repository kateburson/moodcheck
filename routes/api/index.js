const router = require("express").Router();
const userRoutes = require("./users");
const journalRoutes = require("./journal");

router.use("/users", userRoutes);
router.use("/journal", journalRoutes);

module.exports = router;
