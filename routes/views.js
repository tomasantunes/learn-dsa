var express = require('express');
var router = express.Router();

router.get('/en/arrays', function(req, res, next) {
  res.render('content/en/arrays');
});

router.get('/pt/arrays', function(req, res, next) {
  res.render('content/pt/arrays');
});

router.get('/en/computational-complexity', function(req, res, next) {
  res.render('content/en/computational-complexity');
});

router.get('/pt/computational-complexity', function(req, res, next) {
  res.render('content/pt/computational-complexity');
});

module.exports = router;