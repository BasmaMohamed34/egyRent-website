const User=require('../models/users');
const PostController=require('./post');
const Posts=require('../models/post')

module.exports={
    getUser(req,res,next){
        const userId=req.params.id;
        User.find({_id:userId})
        .then(user =>{ res.send(user),console.log(user)})
        .catch(next) 
    },
    getSaved(req,res,next){
        const userId=req.params.id;
        User.find({_id:userId}).select("saved -_id")
        .then(user=>{
        let data;
            data=user[0];
            console.log(data);
        })
        Posts.find({_id:data.saved[0].post})
        .then(post=>{res.send(post)})
        .catch(next)
        }//leeeh el response array ??!!!!!!
    ,
    getHistory(req,res,next){
        const userId=req.params.id;
        User.find({_id:userId})
        .then(user=>res.send(user.history))
        .catch(next)
    },
    createUser(req,res,next){
        console.log("userss")
        const userProps = req.body;
        User.create(userProps)
      .then(user => res.send(user)) 
      .catch(next) 
    }

}