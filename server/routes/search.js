const searchController = require("../controllers/search");

module.exports = (app) => {
  app.get("/search-result", searchController.all);
  app.get("/search-result/:location/:guests", searchController.byLocation);
  app.get("/search-result/:location", searchController.byLocationOnly);
  // app.post("/search-result", searchController.send);
  app.post("/search-reserve", searchController.create);
};
