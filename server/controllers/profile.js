const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const saltRounds = 10;

module.exports = {
  signIn: async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    let status = false;
    const user = await User.findOne({ username: username });
    if (user) {
      const validatePassowrd = await bcrypt.compare(password, user.password);
      if (validatePassowrd) {
        let payload = { id: user._id, user_type_id: user.user_type_id };
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        res
          .status(200)
          .header("auth-token", token)
          .send({ token: token, id: user._id });
        status = true;
        next();
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
    return status;
  },

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
    await User.findById(userId)
      .populate("posts")
      .then((user) => res.status(200).json(user.posts))
      .catch(next);
  },

  getSaved: async (req, res, next) => {
    const userId = req.params.id;
    await User.findById(userId)
      .populate("saved")
      .then((user) => res.status(200).json(user.saved))
      .catch(next);
  },

  createUser: async (req, res, next) => {
    let user = await User.findOne({ username: req.body.username });
    if (user) return res.status(400).send({payload:"User already registered."});
    else {
      const myPlaintextPassword = req.body.password;
      await bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
        // Store hash in your password DB.
        if (hash) {
          req.body.password = hash;
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
            .then((user) => {
              //user.save()
              let payload = { id: user._id };
              const token = jwt.sign(payload, config.TOKEN_SECRET);
              res.status(200).send({ token: token, id: user._id });
            })
            .catch(next);
        } else console.log(err);
      });
    }
  },

  deleteUser: async (req, res, next) => {
    const userId = req.params.id;
    await User.findOneAndDelete(userId)
      .then(() => res.send(500))
      .catch(next);
  },

  editUser: async (req, res, next) => {
    const userId = req.params.id;

    if (req.file) {
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
    } else {
      await User.findByIdAndUpdate(userId, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        location: req.body.location,
      })
        .then((user) => res.status(200).json(user))
        .catch(next);
    }
  },
};
