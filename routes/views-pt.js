var express = require('express');
var router = express.Router();

router.get('/pt/arrays', function(req, res, next) {
  res.render('content/pt/arrays');
});

router.get('/pt/computational-complexity', function(req, res, next) {
  res.render('content/pt/computational-complexity');
});

module.exports = router;