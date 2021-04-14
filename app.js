const express = require("express");

const app = express();

app.use(express.static("public"));


app.get('/', (req, res) => {
      res.redirect("/index.html");
  });
  app.get('/quiz', (req, res) => {
    res.redirect("/quiz.html");
});

let port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("server started at port 3000");
});