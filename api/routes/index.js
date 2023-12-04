const routes = require("express").Router();
const jikan = require("./jikan");

routes.use("/jikan", jikan);

module.exports = routes;
