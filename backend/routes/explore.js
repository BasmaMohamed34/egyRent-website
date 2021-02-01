const exploreController=require('../controllers/home');
module.exports=(app)=>{
    app.get('/explore',exploreController.all);
}