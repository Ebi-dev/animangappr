var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.create);
router.post("/login", userController.login);
router.get("/", userController.getAll);
router.post("/auth", userController.auth);

module.exports = router;
