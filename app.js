const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  res.render("index")
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.post("/contact", function (res, req) {
  username = req.body.fullName;
  email = req.body.email;
  message = req.body.message;

  console.log(username);
  console.log(email);
  console.log(message);

  req.redirect("index")
});

// app.get("/work", function (req, res) {
// res.render("work");
// });


app.listen(port, function (req, res) {
  console.log("Server running on port 3000.");
});
