const User = require("../models/users");

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
  getHistory: async (req, res, next) => {
    const userId = req.params.id;
    const user = await User.findById(userId)
      .populate("history")
      .then((user) => res.status(200).json(user.history))
      .catch(next);
  },
  createUser: async (req, res, next) => {
    //console.log("userss");
    const userProps = req.body;
    User.create(userProps)
      .then((user) => res.status(200).json(user))
      .catch(next);
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
