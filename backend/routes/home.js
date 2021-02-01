const homeController=require('../controllers/home');
module.exports=(app)=>{
    app.get('/home',homeController.all);
}