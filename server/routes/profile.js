const profileController = require("../controllers/profile");

module.exports = (app) => {
  app.get("/profile/:id", profileController.getUser);
  app.get("/profile/:id/profile-posts", profileController.getPosts);
  app.get("/profile/:id/profile-saved", profileController.getSaved);
  app.post("/signup", profileController.createUser);
  app.delete("/profile/:id", profileController.deleteUser);
  app.patch("/profile/:id", profileController.editUser);
  app.post("/signin", profileController.signIn);
};
