var express = require('express');
var router = express.Router();

router.get('/en/arrays', function(req, res, next) {
  res.render('content/en/arrays');
});

router.get('/en/computational-complexity', function(req, res, next) {
  res.render('content/en/computational-complexity');
});

router.get('/en/linked-lists-intro', function(req, res, next) {
  res.render('content/en/linked-lists-intro');
});

router.get('/en/singly-linked-lists', function(req, res, next) {
  res.render('content/en/singly-linked-lists');
});

router.get('/en/doubly-linked-lists', function(req, res, next) {
  res.render('content/en/doubly-linked-lists');
});

router.get('/en/circular-linked-lists', function(req, res, next) {
  res.render('content/en/circular-linked-lists');
});

router.get('/en/stack', function(req, res, next) {
  res.render('content/en/stack');
});

router.get('/en/queue', function(req, res, next) {
  res.render('content/en/queue');
});

router.get('/en/hash-table', function(req, res, next) {
  res.render('content/en/hash-table');
});

module.exports = router;