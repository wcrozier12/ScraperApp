const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const request = require("request");
const mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("./models");

const PORT = 3000;

// Initialize Express
const app = express();

// Configure middleware

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


// A GET route for scraping the echojs website
app.get("/scrape", function(req, res) {
  const url = "https://www.sciencenews.org";
  // First, we grab the body of the html with request
  axios.get(url).then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    const $ = cheerio.load(response.data);
    const element = $('div#page').children('section#section-content').children('div#zone-content-wrapper')
        .children('div#zone-content').children('div#region-content').children('div.region-inner')
        .children('div#block-system-main').children('div.block-inner').children('div.content').children('article')
        .children('div.content').children('div.field').children('div.field-items').children('div.field-item');
        
      element.each((i, element) => {
        const result = {};
        const title = $(element).children('article').children('header').children('h2').children('a').attr('title');
        const link = url + $(element).children('article').children('div.main-image').children('div.field')
        .children('div.field-items').children('div').children('a').attr('href');
        const photo = $(element).children('article').children('div.main-image').children('div.field')
        .children('div.field-items').children('div').attr('resource');
        
        //If the title is undefined, it means it was an ad and not an article.
        if (title === undefined) {
          return;
        }

        result.title=title;
        result.link=link;
        result.photo=photo;

        db.articles
        .create(result)
        .then((data) => {
          console.log('Added Successfully')
        })
        .catch((err) => {
          console.log(err);
        })
      })
  });
    res.json('all done, you added articles')
});

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
