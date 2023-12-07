const mongoose = require("../config/mongodb");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "el campo es obligatorio"],
    minLength: 4,
    maxLength: 30,
  },
  email: String,
  password: {
    type: String,
    required: [true, "el campo es obligatorio"],
    minLength: 3,
    maxLength: 16,
  },
  userInfo: String,
  favAnime: Array,
  favManga: Array,
});

userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model("users", userSchema);
