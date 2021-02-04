const postController = require("../controllers/post");

module.exports = (app) => {
  app.get("/post/:id", postController.getPost);
  app.post("/:id/create", postController.createPost);
};
