const searchController=require('../controllers/search');

module.exports=(app)=>{ 
    app.get('/search-result',searchController.all);
    app.post('/search-result',searchController.send);
    app.post('/search-reserve',searchController.create)
}