const postController = require("../controllers/post");
const path = require("path");
const multer = require("multer");
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

module.exports = (app) => {
  app.get("/post/:id", postController.getPost);
  app.get("/:username/post/:id", postController.savePost);
  app.post("/:id/createpost", upload, postController.createPost);
};
