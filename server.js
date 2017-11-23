const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const request = require("request");
const mongoose = require("mongoose");
const routes = require('./src/controllers/routes');

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("./models");
const PORT = 3001;
// Initialize Express
const app = express();
app.use('/', routes);
// Configure middleware
//To prevent errors from Cross Origin Resource Sharing, we will set 
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));


// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/Scraper", {
  useMongoClient: true
});


// Listen on port 3001
app.listen(PORT, function() {
  console.log("App running on port " + PORT);
});