// Dependecies
const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const path = require("path");

// Set up a default port, configure mongoose, configure our middleware
const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets if in production (running on Heroku)

  app.use(express.static(__dirname + "/client/public"));



// Routing
var articles = require("./controllers/article-controller");
var router = express.Router();

router.get("/api/saved", articles.find);

router.post("/api/saved", articles.insert);

router.delete("/api/saved/:id", articles.delete);

router.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.use(router);

// Connect mongoose to our database
const db = process.env.MONGODB_URI || "mongodb://localhost/nyt-react";
mongoose.connect(db, function(error) {
 
  if (error) {
    console.error(error);
  }
});

app.listen(PORT, function() {
  console.log("Server now on port "+ PORT);
});
