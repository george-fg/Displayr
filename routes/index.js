var express = require('express');
var router = express.Router();
var dotenv = require('dotenv')
dotenv.load()



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)', mapType: 'Default', mapAPI: process.env.GOOGLE_MAPS_KEY});
});

router.get('/cycling', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)', mapType: 'Cycling', mapAPI: process.env.GOOGLE_MAPS_KEY});
});

router.get('/traffic', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)', mapType: 'Traffic', mapAPI: process.env.GOOGLE_MAPS_KEY});
});

router.get('/lightrail', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)', mapType: 'London', mapAPI: process.env.GOOGLE_MAPS_KEY});
});

router.get('/eda', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)', mapType: 'EDA', mapAPI: process.env.GOOGLE_MAPS_KEY});
});

router.get('/area51', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)', mapType: 'AREA51', mapAPI: process.env.GOOGLE_MAPS_KEY});
});

router.get('/cookietime', function(req, res, next) {
  res.render('index', { greeting: 'Hello', title: 'Displayr', subtitle: '(without an e)', mapType: 'Cookies', mapAPI: process.env.GOOGLE_MAPS_KEY});
});





module.exports = router;
