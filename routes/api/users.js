const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users/login"
router.route("/login")
  .post(usersController.login)

// Matches with "/api/users/register"
router.route("/register")
  .post(usersController.register)

router.route("/validate")
  .post(usersController.validateToken);
  
module.exports = router;