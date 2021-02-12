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
    const myPlaintextPassword = req.body.password;
    bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
      // Store hash in your password DB.
      if (hash) {
        console.log(hash);
        req.body.password = hash;
        userProps = req.body;
        userpic = req.file.filename;
        User.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone,
          location: req.body.location,
          photo: req.file.filename,
          type: req.body.type,
        })
          .then((user) => user.save())
          .then((user) => res.send(user))
          .catch(next);
      } else console.log(err);
    });
    /* console.log(req.body);
    console.log(req.file); */
  },
  deleteUser: async (req, res, next) => {
    const userId = req.params.id;
    await User.findOneAndDelete(userId)
      .then(() => res.send(500))
      .catch(next);
  },
  editUser: async (req, res, next) => {
    const userId = req.params.id;
    /*  const userProps = req.body; */
    await User.findByIdAndUpdate(userId, {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      location: req.body.location,
      photo: req.file.filename,
    })
      .then((user) => res.status(200).json(user))
      .catch(next);
  },

  signIn: async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({ username: username });
    if (user) {
      const validatePassowrd = await bcrypt.compare(password, user.password);
      if (validatePassowrd) {
        res.status(200).json({ message: "Valid Password" });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
  },
};
