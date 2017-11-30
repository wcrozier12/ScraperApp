const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const request = require("request");
const mongoose = require("mongoose");
const routes = require('./src/controllers/routes');
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Scraper";
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("./models");
let PORT = process.env.PORT || 3001;
// Initialize Express
const app = express();
// Configure middleware
//To prevent errors from Cross Origin Resource Sharing, we will set 
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
// Express - Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect('mongodb://heroku_gpbl7ppr:nufd9pnvd05strk1v7lu461t5f@ds125146.mlab.com:25146/heroku_gpbl7ppr', {
  useMongoClient: true
});

app.use('/', routes);

// Listen on port 3001
app.listen(PORT, function() {
  console.log("App running on port " + PORT);
});
