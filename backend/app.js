const http = require('http');
const express= require('express');
const home=require('./routes/home');
const search=require('./routes/search');
const post=require('./routes/post');
const explore=require('./routes/explore');
const PORT = process.env.PORT || 5000
const app=express();
const mongoose=require('mongoose')
const connection_url="mongodb+srv://egyRent:egyRent-website-G5@cluster0.f7cmj.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(connection_url,{useNewUrlParser: true,  useUnifiedTopology: true});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

home(app);
explore(app);
search(app);
post(app);
app.use((err, req, res, next)=>{
  // any error should return from response
  console.log(err);
  res.status(422).send({err: err.message})

})
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

app.listen(PORT, () => {
  console.log("Server running...");
});