const Posts = require("../models/post");
const User = require("../models/users");

module.exports = {
  getPost(req, res, next) {
    const postId = req.params.id;
    Posts.find({ _id: postId })
      .then((Posts) => res.send(Posts))
      .catch(next);
  },
  createPost: async (req, res, next) => {
    const userId = req.params.id;
    /* Posts.create(postProps)
      .then((post) => res.send(post))
      .catch(next); */
    const newPost = new Posts(req.body);
    const user = await User.findById(userId);
    newPost.createdBy = user;
    await newPost.save();
    user.posts.push(newPost);
    await user.save();
    res.status(201).json(newPost);
  },
};
