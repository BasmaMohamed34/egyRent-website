const Posts = require("../models/post");
const User = require("../models/users");
const Reservation = require("../models/reservations")
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
  
  checkAvail: async (req,res,next)=>{
    let postID=req.body.post;
    // let checkin=new Date(req.body.checkIn).toISOString();
    // let checkout=new Date(req.body.checkOut).toISOString();

    let checkin=new Date(req.body.checkIn).toString();
    let st1=checkin.slice(0,25)+checkin.slice(34).toISOString();
    let checkout=new Date(req.body.checkOut);
    let st2=checkout.slice(0,25)+checkout.slice(34).toISOString();
    console.log(st1)
    console.log(st2)
    const checking=await Reservation.find({checkIn:checkin});
    // console.log("checkin" +checkin, "checkout "+checkout)
    console.log(checking)
    if(checking.length>0){
      res.send("place is not available in that time");
    }
    else
      res.status(200).send("place is available");
  }
};