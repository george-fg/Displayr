var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)', mapType: 'Default'});
});

router.get('/cycling', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)', mapType: 'Cycling'});
});

router.get('/traffic', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)', mapType: 'Traffic'});
});

router.get('/lightrail', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)', mapType: 'London'});
});

router.get('/eda', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)', mapType: 'EDA'});
});

router.get('/area51', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)', mapType: 'AREA51'});
});

router.get('/cookietime', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)', mapType: 'Cookies'});
});





module.exports = router;
