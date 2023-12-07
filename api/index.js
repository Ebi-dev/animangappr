const express = require("express");
const morgan = require("morgan");
var cors = require("cors");
const routes = require("./routes/index");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3001;

app.set("secretKey", "AniMangApp");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(routes);

app.listen(PORT, () => console.log(`live on http://localhost:${PORT}`));

function verifyToken(req, res, next) {
  jwt.verify(
    req.headers["x-access-token"],
    req.app.get("secretKey"),
    function (error, payload) {
      if (error) {
        res.json({ message: error.message });
      } else {
        console.log("payload", payload);
        req.body.userId = payload.userId;
        next();
      }
    }
  );
}

app.verifyToken = verifyToken;

module.exports = { app };
