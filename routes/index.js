var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)' });
});

module.exports = router;
