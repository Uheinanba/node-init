const express = require('express');
const router = express.Router();
const utility = require('utility');

/* GET home page. */
router.get('/', function(req, res, next) {
  const q = req.query.q;
  res.render('index', { title: utility.md5(q) });
});

module.exports = router;
