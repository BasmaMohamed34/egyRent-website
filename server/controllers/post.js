const Posts = require("../models/post");
const User = require("../models/users");
const Reservation = require("../models/reservations");
module.exports = {
  getPost(req, res, next) {
    const postId = req.params.id;
    Posts.find({ _id: postId })
    .populate("createdBy", "firstname")
    .populate("commentsDetails.commentedBy")
    .then((Posts) => res.send(Posts))
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

  toggleSavePost: async (req, res, next) => {
    const userID = req.body.UserID;
    const postID = req.body.PostID;
    const user = await User.findOne({
      _id: userID
    });
    const post = await Posts.findById(postID);
    let savedPosts = user.saved;
    if (savedPosts.includes(postID)) {
      savedPosts.splice(postID, 2)
      post.savedBy = null
      user.save()
      post.save()
      res.send(false)
    } else {
      post.savedBy = user.id;
      post.save();
      savedPosts.push(post);
      user.save();
      res.send(true);
    }
  },

  checkAvail: (req, res, next) => {
    let userID = req.body.id;
    let postID = req.body.post;
    let dateIn = (new Date(req.body.checkIn));
    let dateOut = (new Date(req.body.checkOut));
    let checkin = new Date(dateIn).toISOString();
    let checkout = new Date(dateOut).toISOString();
    console.log("chechin= ",checkin)
    console.log("chechout= ",checkout)
    Reservation.find({
        post: postID
      })
      .then(reserved => {
        console.log(reserved.length);
        var c = "f";
        if (reserved.length > 0) {
          for (i of reserved) {
            let DBCheckIn = JSON.stringify(i.checkIn).slice(1, -1);
            let DBCheckOut = JSON.stringify(i.checkOut).slice(1, -1);
            if ((DBCheckIn >= checkout) || (DBCheckOut <= checkin)) {
              c = "t";
            } else res.send("Not Available");
          }
        }
        if ((reserved.length === 0) || c) {
          Reservation.create(req.body).catch(err => console.log(err));
          Posts.find({
              _id: postID
            }).populate("createdBy")
            .then((posts) => {
              console.log("posts= ",posts);
              if (posts.length > 0) {
                let host = posts[0].createdBy;
                User.findOne({
                  _id: userID
                }).then((user) => {
                  console.log("user= ",user)
                  user.notification.push(`${host.firstname} ${host.lastname} creator of ${posts[0].title} in ${posts[0].location} to contact the host: Email:${host.email}, Phone Number:${host.phone}. your reservation checkin date: ${checkin.split('T')[0]} checkout date: ${checkout.split('T')[0]}`);
                  user.save()
                }).catch((err) => {
                  console.log(err)
                });
              }
            }).catch((err) => {
              console.log(err)
            });
          res.send("Available");
        }
      }).catch(err => {
        console.log(err);
      });
  },
};