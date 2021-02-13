const Posts = require("../models/post");
const Reservation = require("../models/reservations");
module.exports = {
  all(req, res, next) {
    limit = parseInt(req.query.limit) || "";
    Posts.find({})
      .limit(limit)
      .then((Posts) => res.send(Posts))
      .catch(next);
  },
  send(req, res, next) {
    // let arrOfposts;
    // const searchProp=req.body;
    // Posts.find({location:searchProp.location})
    // // .then(Posts => res.send(Posts))
    // .then((posts)=>{
    //     arrOfposts=posts;
    // })
    //     Reservation.find({post:posts[1],checkIn:searchProp.checkIn,checkOut:searchProp.checkOut})
    //     .then(Reservation=>res.send(Reservation))
    //     .catch(next)
  },
  byLocationOnly(req, res, next) {
    const location = req.params.location;
    Posts.find({ location: location })
      .then((Posts) => res.send(Posts))
      .catch(next);
  },
  byLocation(req, res, next) {
    const location = req.params.location.toString().toLowerCase();
    const guests = req.params.guests;
    Posts.find({ location: location, guests: guests })
      .then((Posts) => res.send(Posts))
      .catch(next);
  },

  create(req, res, next) {
    const postProps = req.body;
    Reservation.create(postProps)
      .then((reserve) => res.send(reserve))
      .catch(next);
  },
};
