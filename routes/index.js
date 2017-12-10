const express = require('express');
const eventproxy = require('eventproxy');
const superagent = require('superagent');
const utility = require('utility');
const cheerio = require('cheerio');
const url = require('url');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // const q = req.query.q;

  // res.render('index', { title: utility.md5(q) });

  const cnodeUrl = 'https://cnodejs.org/';

  superagent.get(cnodeUrl).end(function(err, sres) {
    if (err) {
      return console.error(err);
    }
    var topicUrls = [];
    var $ = cheerio.load(sres.text);
    $('#topic_list .topic_title').each(function(idx, element) {
      var $element = $(element);
      var href = url.resolve(cnodeUrl, $element.attr('href'));
      topicUrls.push({
        url: href,
        title: $element.html(),
      });
    });
    res.send(topicUrls);
  });
});

module.exports = router;
