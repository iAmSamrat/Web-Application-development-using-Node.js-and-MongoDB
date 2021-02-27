var express = require('express');
var axios = require("axios");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var news1 = null
  axios.get("https://newsapi.org/v2/everything?q=Apple&from=2021-02-27&sortBy=popularity&apiKey=421bda37ac1044f39a51cfcd3fca92d6").then(function(news){
    news1 = news.data.articles;
    res.render("index",{data:news1})
  });
});

module.exports = router;
