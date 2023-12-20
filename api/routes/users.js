var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.create);
router.post("/login", userController.login);
router.get("/", userController.getAll);
router.post("/auth", userController.auth);
router.put("/favAnime/:id", /*(req,res,next)=>{req.app.verifyToken(req,res,next)},*/ userController.addFav);

module.exports = router;
