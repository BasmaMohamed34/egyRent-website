const Posts=require('../models/post')

module.exports={
    getPost(req, res, next){
        const postId=req.params.id;
        Posts.find({_id:postId})
        .then(Posts => res.send(Posts))
        .catch(next) 
    },
    create(req,res,next){
        const postProps = req.body;
     Posts.create(postProps)
      .then(post => res.send(post)) 
      .catch(next) 

    }
}