const mongoose = require("mongoose");
const schema = mongoose.Schema;

const postSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  baths: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  pictures: [
    {
      type: String,
      required: true,
    },
  ],
  comments: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  wifi: { type: Boolean },
  kitchen: { type: Boolean },
  heating: { type: Boolean },
  tv: { type: Boolean },
  elevator: { type: Boolean },
  breakfast: { type: Boolean },
  ac: { type: Boolean },
  smokeAlarm: { type: Boolean },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  savedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Posts = mongoose.model("Posts", postSchema);
module.exports = Posts;
