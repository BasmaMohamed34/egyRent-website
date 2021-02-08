const profileController = require("../controllers/profile");

module.exports = (app) => {
  app.get("/profile/:id", profileController.getUser);
  app.get("/profile/:id/profile-posts", profileController.getPosts);
  app.get("/profile/:id/profile-saved", profileController.getSaved);
  app.get("/profile/:id/history", profileController.getHistory);
  app.post("/createuser", profileController.createUser);
  app.delete("/profile/:id", profileController.deleteUser);
  app.patch("/profile/:id", profileController.editUser);
};
