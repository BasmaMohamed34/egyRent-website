const Posts = require('../models/post');
const Reservation=require('../models/reservations');
module.exports={
    all(req, res, next){
        limit =  parseInt(req.query.limit) || ''
        Posts.find({}).limit(limit)
        .then(Posts => res.send(Posts))
        .catch(next) 
    }, 
    send(req, res, next){
        const searchProp=req.body;
        Posts.find({location:searchProp.location})
        // .then(Posts => res.send(Posts))
        .then((posts)=>{

            for( i in posts){             
                Reservation.find({post:i._id,checkIn:searchProp.checkIn,checkOut:searchProp.checkOut})
                .then(Reservation=>res.send(Reservation)
            )}
        
        })
        .catch(next) 
    },
    create(req,res,next){
        const postProps = req.body;
     Reservation.create(postProps)
      .then(reserve => res.send(reserve)) 
      .catch(next) 

    }
}