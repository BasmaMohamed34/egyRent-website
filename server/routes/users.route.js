// const express = require("express");
// const app = express.app();
const profileController = require("../controllers/profile");
const postController = require("../controllers/post");
const path = require("path");
const multer = require("multer");
const auth = require("../middlewares/auth");
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "../uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, "congar" + "-" + Date.now() + path.extname(file.originalname));
  },
});
const fileFilter = (res, req, cb) => {
  cb(null, true);
};
const upload = multer({
  storage: storage,
  /* fileFilter: fileFilter, */
  /* limits: { fileSize: 40000, files: 5 }, */
}).array("myFiles", 5);

/* ****************************************** */

module.exports = (app) => {
  app.get("/profile/:id", auth.verifyUserToken, profileController.getUser);
  app.get("/profile/:id/profile-posts", auth.verifyUserToken, profileController.getPosts);
  app.get("/profile/:id/profile-saved", auth.verifyUserToken, profileController.getSaved);
  app.delete("/profile/:id", auth.verifyUserToken, profileController.deleteUser);
  app.patch("/profile/:id", auth.verifyUserToken, profileController.editUser);
  app.post("/signup", profileController.createUser);
  app.post("/signin", profileController.signIn);
  app.get("/post/:id", postController.getPost);
  app.get("/:username/post/:id", auth.verifyUserToken, postController.savePost);
  app.post("/:id/createpost", auth.verifyUserToken, upload, postController.createPost);
};
  
// module.exports = app;