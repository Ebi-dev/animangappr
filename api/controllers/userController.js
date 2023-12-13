const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

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
      res.json(document);
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
        const token = jwt.sign({ userId: user._id }, req.app.get("secretKey"), {
          expiresIn: "1h",
        });
        const refreshToken = jwt.sign(
          { userId: user._id },
          req.app.get("secretKey"),
          { expiresIn: "7d" }
        );
        res
          .status(201)
          .cookie("refreshToken", refreshToken, {
            secure: false, //change both false to true when needed
            httpOnly: false, //change both false to true when needed
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
          })
          .json({ token, user });
      } else {
        res.status(401).json({ message: "Usuario y/o contraseña incorrectos" });
      }
    } catch (e) {
      console.log(e);
    }
  },
  auth: async function (req, res, next) {
    try {
      let decodedToken = jwt.decode(req.body.ssToken);
      const currentUser = await auxGetById(decodedToken.userId)
      if (req.body.ssToken) {
        jwt.verify(
          req.body.ssToken,
          req.app.get("secretKey"),
          (err, decoded) => {
            if (err) {
              const cookie = req.cookies.refreshToken;

              if (cookie) {
                jwt.verify(cookie, app.get("secretKey"), (err, decoded) => {
                  if (err) {
                    // Handle invalid or expired refresh token
                    res
                      .status(401)
                      .json({ error: "Invalid or expired refresh token" });
                  } else {
                    // Generate a new JWT token
                    const newJwtToken = jwt.sign(
                      { userId: decoded.userId },
                      app.get("secretKey"),
                      { expiresIn: "1h" }
                    );
                    console.log("current user: " + currentUser);
                    // Return the new JWT token to the client
                    res.json({
                      token: newJwtToken,
                      user: currentUser,
                    });
                  }
                });
              } else {
                // No refresh token found, prompt user to log in
                res.status(401).json({ error: "Refresh token not found" });
              }
            } else {
              console.log("current user: " + currentUser);
              res.status(200).json({
                token: req.body.ssToken,
                user: currentUser,
              });
            }
          }
        );
      } else {
        res.status(401).json({ message: "no session storage token found!" });
      }
    } catch (e) {
      console.log(e);
    }
  },
};

async function auxGetById(id) {
  try {
    const document = await userModel.findById(id);
    return document.username;
  } catch (e) {
    console.log(e);
  }
}
