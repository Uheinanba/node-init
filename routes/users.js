var express = require('express');
var router = express.Router();

/* GET users listing. */
router
  .get('/', (req, res, next) => {
    res.render('users', { name: 'Express' });
    // res.send('respond with a resource');
  })
  .post('/', (req, res, next) => {
    res.json({ data: req.body });
  });

module.exports = router;
