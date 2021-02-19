const http = require("http");
const usersRoute = require("./routes/users.route");
const express = require("express");
const bodyParser = require("body-parser");
const home = require("./routes/home");
const search = require("./routes/search");
const explore = require("./routes/explore");
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
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

app.use(bodyParser.json());
/* app.use(fileUpload()); */

usersRoute(app);
home(app);

explore(app);
search(app);

app.use((err, req, res, next) => {
    // any error should return from response
    console.log(err);
    res.status(422).send({ err: err.message });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    });
}

app.use("/uploads/", express.static("../uploads"));
app.listen(PORT, () => {
    console.log("Server running...");
});