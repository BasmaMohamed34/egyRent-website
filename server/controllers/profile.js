const User = require("../models/users");
const bcrypt = require("bcrypt");
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
    const user = await User.findById(userId)
      .populate("posts")
      .then((user) => res.status(200).json(user.posts))
      .catch(next);
  },
  getSaved: async (req, res, next) => {
    const userId = req.params.id;
    const user = await User.findById(userId)
      .populate("saved")
      .then((user) => res.status(200).json(user.saved))
      .catch(next);
  },

  createUser(req, res, next) {
    console.log("userss");
    const myPlaintextPassword = req.body.password;
    bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
      // Store hash in your password DB.
      if (hash) {
        console.log(hash);
        req.body.password = hash;
        userProps = req.body;
        User.create(userProps)
          .then((user) => res.send(user))
          .catch(next);
      } else console.log(err);
    });
  },
  deleteUser: async (req, res, next) => {
    const userId = req.params.id;
    await User.findOneAndDelete(userId)
      .then(() => res.send(500))
      .catch(next);
  },
  editUser: async (req, res, next) => {
    const userId = req.params.id;
    const userProps = req.body;
    //console.log(userProps);
    await User.findByIdAndUpdate(userId, userProps)
      .then((user) => res.status(200).json(user))
      .catch(next);
  },
};
