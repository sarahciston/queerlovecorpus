const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// import "express"
// import "body-parser" as bodyParser


app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});


// serve your css as static
app.use(express.static(__dirname));

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
  console.log(__dirname + "/index.html")
});

app.get("/queer", (req, res) => {
    console.log(__dirname + "/queer.html")
  });

  app.get("/gpt", (req, res) => {
    console.log(__dirname + "/gpt.html")
  });



  app.post("/", (req, res) => {
    console.log(req.body)
  });
