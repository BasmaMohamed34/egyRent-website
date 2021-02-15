const Posts = require("../models/post");
const User = require("../models/users");
const Reservation = require("../models/reservations");
module.exports = {
  getPost(req, res, next) {
    const postId = req.params.id;
    Posts.find({ _id: postId })
      .populate("createdBy")
      .then((Posts) => res.send(Posts))
      .then((Posts) => res.send(Posts.createdBy))
      .catch(next);
  },

  createPost: async (req, res, next) => {
    const userId = req.params.id;
    //console.log(req.files); //Postman test for multiple files works!!!
    const picturesList = req.files.map((file) => file.filename);
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
    const userID = req.body.UserID;
    const postID = req.body.PostID;
    const user = await User.findOne({ _id: userID });
    console.log("User id: ", userID);
    console.log("Post id: ", postID);
    const post = await Posts.findById(postID);
    post.savedBy = user.id;
    await post.save();
    user.saved.push(post);
    await user.save();
    console.log(user);
    res.status(201).json(post);
  },

  checkAvail: async (req, res, next) => {
    let userID = req.body.id;
    let postID = req.body.post;
    console.log(postID);
    let x1 = new Date(req.body.checkIn);
    let x2 = x1.getDate();
    let y1 = new Date(req.body.checkOut);
    let y2 = y1.getDate();
    let dateIn = x1.setDate(x2 + 1);
    let dateOut = y1.setDate(y2 + 1);
    let checkin = new Date(dateIn).toISOString();
    let checkout = new Date(dateOut).toISOString();

    const checking = await Reservation.find({ post: postID });
    if (checking.length > 0) {
      checking.forEach((i) => {
        if (JSON.stringify(i.checkOut).slice(1, -1) <= checkin) {
          res.send(true);
          Reservation.create(req.body);
          Posts.find({ _id: postID })
            .populate("createdBy")
            .then((Posts) => {
              let host = Posts[0].createdBy;
               User.findOne({ _id: userID }).then((user)=>{
                user.notification.push(`${host.firstname} ${host.lastname} creator of ${Posts[0].title} in ${Posts[0].location} to contact the host: Email:${host.email}, Phone Number:${host.phone}.`);
                //console.log(user.notification[0]) 
                user.save()
              }).catch((err)=>{console.log(err)})
            })
            .catch((err)=>{console.log(err)});
          } else res.send(false);
        });
    }
  },
};
