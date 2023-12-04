const userModel = require("../models/userModel");

module.exports = {
  create: async function (req, res, next) {
    try {
      console.log(req.body);

      const document = new userModel({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      const user = await document.save();
      res.json(user);
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  getAll: async function (req, res, next) {
    try {
      const documents = new userModel.find();
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
};
