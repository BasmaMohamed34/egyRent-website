const Posts = require('../models/post');

module.exports={
    all(req, res, next){
        limit =  parseInt(req.query.limit) || ''
        Posts.find({}).limit(limit)
        .then(Posts => res.send(Posts))
        .catch(next) 
    }
}
