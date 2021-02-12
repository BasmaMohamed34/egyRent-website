const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const home = require("./routes/home");
const search = require("./routes/search");
const post = require("./routes/post");
const explore = require("./routes/explore");
const profile = require("./routes/profile");
const PORT = process.env.PORT || 5000;
const app = express();
const bcrypt = require("bcrypt");
/* const fileUpload = require("express-fileupload"); */
/* var multer = require("multer"); */
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";
const mongoose = require("mongoose");
const connection_url =
  "mongodb+srv://egyRent:egyRent-website-G5@cluster0.f7cmj.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/* app.use(bodyParser.json()); */
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

// Load hash from your password DB.
// bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//     // result == true
// });
// bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
//     // result == false
// });

app.use(bodyParser.json());
/* app.use(fileUpload()); */
home(app);
explore(app);
search(app);
post(app);
profile(app);
app.use((err, req, res, next) => {
  // any error should return from response
  console.log(err);
  res.status(422).send({ err: err.message });
});

app.use("/uploads/", express.static("../uploads"));

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
app.listen(PORT, () => {
  console.log("Server running...");
});
