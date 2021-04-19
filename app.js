const express = require("express");
const app = express();
let http = require('http').createServer(app);
// const axios = require("axios");

app.use(express.static("public"));


app.get('/', (req, res) => {
      res.redirect("/index.html");
  });

app.get('/quiz', (req, res) => {
    res.redirect("/quiz.html");
});

let db = {
  name:"",
  age:"",
  gender:""
}


// axios.get('./Q1.html', {
//   params: {
//     db
//   }
// })








let port = process.env.PORT || 3000;
http.listen(port, function () {
  console.log("server started at port 3000");
});