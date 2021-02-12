const config = require('config');
const jwt = require('jsonwebtoken');
// const Joi = require('joi');
const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({

  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true
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
    required: true,
  },
  notification: [],
  /* notification: { type: Array }, Should be like this!!!*/
  type: {
    /* host: { type: Boolean },
    traveller: { type: Boolean }, */
    type: String,
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

//function to validate user 
// function validateUser(user) {
//   const schema = {
//     name: Joi.string().min(3).max(50).required(),
//     email: Joi.string().min(5).max(255).required().email(),
//     password: Joi.string().min(3).max(255).required()
//   };

//custom method to generate authToken 
usersSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign({ _id: this._id},
    config.get('myprivatekey')); //get the private key from the config file -> environment variable
  return token;
}

const User = mongoose.model("User", usersSchema);
module.exports = User;
