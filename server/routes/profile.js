const profileController = require("../controllers/profile");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "../uploads");
  },
  filename: function (req, file, cb) {
    //console.log(file);
    cb(null, "pic" + "-" + Date.now() + path.extname(file.originalname));
  },
});
/* const fileFilter = (res, req, cb) => {
  cb(null, true);
}; */
const upload = multer({
  storage: storage,
  /* fileFilter: fileFilter, */
  limits: { fileSize: 400000 },
});
module.exports = (app) => {
  app.get("/profile/:id", profileController.getUser);
  app.get("/profile/:id/profile-posts", profileController.getPosts);
  app.get("/profile/:id/profile-saved", profileController.getSaved);
  app.post("/signup", upload.single("photo"), profileController.createUser);
  app.delete("/profile/:id", profileController.deleteUser);
  app.patch("/profile/:id", upload.single("photo"), profileController.editUser);
  app.post("/signin", profileController.signIn);
};
