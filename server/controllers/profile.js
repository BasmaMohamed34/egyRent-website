const User = require("../models/users");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  getUser: async (req, res, next) => {
    const userId = req.params.id;
    await User.findById(userId)
      .then((user) => {
        res.send(user), console.log(user);
      })
      .catch(next);
  },
  getPosts: async (req, res, next) => {
    const userId = req.params.id;
    const user = await User.findById(userId).populate("posts");
    res.status(200).json(user.posts);
  },
  getSaved: async (req, res, next) => {
    const userId = req.params.id;
    /* User.find({ _id: userId })
      .then((user) => {
        res.send(user[0].saved);
      }) //leeeh el response array ??!!!!!!
      .catch(next); */
    const user = await User.findById(userId).populate("saved");
    res.status(200).json(user.saved);
  },
  getHistory: async (req, res, next) => {
    const userId = req.params.id;
    /*   User.find({ _id: userId })
      .then((user) => res.send(user.history))
      .catch(next); */
    const user = await User.findById(userId).populate("history");
    res.status(200).json(user.history);
  },
  createUser(req, res, next) {
    console.log("userss");
    const myPlaintextPassword = req.body.password;
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
      // Store hash in your password DB.
      if (hash) {
        console.log(hash);
        req.body.password = hash;
        userProps = req.body;
        User.create(userProps)
          .then((user) => res.send(user))
          .catch(next);
      }
      else
        console.log(err);
    });
  }
};
