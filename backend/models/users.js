/* const Posts = require("./post"); */
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const usersSchema = new schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  notification: [],
  type: {
    host: { type: Boolean },
    traveller: { type: Boolean },
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
    },
  ],
  saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
    },
  ],
  history: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
    },
  ],
});

const User = mongoose.model("User", usersSchema);
module.exports = User;
