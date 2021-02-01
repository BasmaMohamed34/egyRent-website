const Posts=require('./post');
const mongoose=require('mongoose');
const schema=mongoose.Schema;
const reservationSchema=new schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Posts
    },
    checkIn:{
        type:Date,
        required:true
    },
    checkOut:{
        type:Date,
        required:true
    }
})

const Reservation=mongoose.model('Reservation',reservationSchema);
module.exports=Reservation;