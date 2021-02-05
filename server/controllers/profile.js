const User = require("../models/users");

module.exports = {
  getUser(req, res, next) {
    const userId = req.params.id;
    User.find({ _id: userId })
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
    const userProps = req.body;
    User.create(userProps)
      .then((user) => res.send(user))
      .catch(next);
  },
};
