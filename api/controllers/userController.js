const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  create: async function (req, res, next) {
    try {
      console.log(req.body);

      const document = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        userinfo: req.body.userinfo,
      });

      const user = await document.save();
      res.json(user);
    } catch (e) {
      console.log(e);
    }
  },

  getAll: async function (req, res, next) {
    try {
      const documents = await userModel.find();
      res.json(documents);
    } catch (e) {
      console.log(e);
    }
  },
  getById: async function (req, res, next) {
    try {
      const document = new userModel.findById(req.params.id);
      req.json(document);
    } catch (e) {
      console.log(e);
    }
  },
  update: async function (req, res, next) {
    try {
      const update = await userModel.updateOne(
        { _id: req.params.id },
        req.body
      );
      res.json(update);
    } catch (e) {
      console.log(e);
    }
  },
  delete: async function (req, res, next) {
    try {
      const deleteResponse = await userModel.deleteOne({ _id: req.params.id });
      res.json(deleteResponse);
    } catch (e) {
      console.log(e);
    }
  },
  login: async function (req, res, next) {
    try {
      const user = await userModel.findOne({ username: req.body.username });
      if (!user) {
        res.status(401).json({ message: "Usuario y/o contraseña incorrectos" });
      }
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({ userId: user._id },req.app.get("secretKey"), {
          expiresIn: "1h",
        });
        res.status(201).json({ token });
      } else {
        res.status(401).json({ message: "Usuario y/o contraseña incorrectos" });
      }

    } catch (e) {
      console.log(e);
    }
  },
};
