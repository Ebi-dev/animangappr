const express = require("express");
const morgan = require("morgan");
var cors = require("cors");
const routes = require("./routes/index");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(routes);

app.listen(PORT, () => console.log(`live on http://localhost:${PORT}`));

module.exports = { app };