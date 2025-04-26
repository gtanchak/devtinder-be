const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    typeof: String,
  },
  lastName: {
    typeof: String,
  },
  email: {
    typeof: String,
  },
  age: {
    typeof: Number,
  },
  gender: {
    typeof: String,
  },
  password: {
    typeof: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
