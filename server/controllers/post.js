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
    //console.log(req.files); //Postman test for multiple files works!!!
    const picturesList = req.files.map((file) => file.path);
    console.log(picturesList);
    const newPost = new Posts({
      title: req.body.title,
      location: req.body.location,
      address: req.body.address,
      type: req.body.type,
      price: req.body.price,
      guests: req.body.guests,
      rooms: req.body.rooms,
      beds: req.body.beds,
      baths: req.body.baths,
      bedrooms: req.body.bedrooms,
      comments: req.body.comments,
      description: req.body.description,
      wifi: req.body.wifi,
      kitchen: req.body.kitchen,
      heating: req.body.heating,
      tv: req.body.tv,
      elevator: req.body.elevator,
      breakfast: req.body.breakfast,
      ac: req.body.ac,
      smokeAlarm: req.body.smokeAlarm,
      pictures: picturesList,
    });
    const user = await User.findById(userId);
    newPost.createdBy = user.id;
    await newPost.save();
    user.posts.push(newPost);
    await user.save();
    res.status(201).json(newPost);
  },
  
  savePost: async (req, res, next) => {
    const postId = req.params.id;
    const userName = req.params.username;
    const user = await User.findOne({ username: userName });
    console.log(user.username);
    const post = await Posts.findById(postId);
    post.savedBy = user.id;
    await post.save();
    user.saved.push(post);
    await user.save();
    res.status(201).json(post);
  },
};
