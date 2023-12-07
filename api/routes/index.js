const routes = require("express").Router();
const jikan = require("./jikan");
const users = require("./users")

routes.use("/jikan", jikan);
routes.use("/users", users)

module.exports = routes;
