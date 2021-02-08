const postController = require("../controllers/post");

module.exports = (app) => {
  app.get("/post/:id", postController.getPost);
  app.get("/:username/post/:id", postController.savePost);
  app.post("/:id/createpost", postController.createPost);
};
