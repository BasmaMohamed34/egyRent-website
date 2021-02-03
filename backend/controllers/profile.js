const User=require('../models/users');

module.exports={
    getUser(req,res,next){
        const userId=req.params.id;
        User.find({_id:userId})
        .then(user =>{ res.send(user),console.log(user)})
        .catch(next) 
    },
    getSaved(req,res,next){
        const userId=req.params.id;
        User.find({_id:userId})
        .then(user=>{res.send(user[0].saved)}) //leeeh el response array ??!!!!!!
        .catch(next)
    },
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