const mongoose = require("../config/mongodb");

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

module.exports = mongoose.model("users", userSchema);
