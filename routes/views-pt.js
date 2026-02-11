var express = require('express');
var router = express.Router();

router.get('/pt/arrays', function(req, res, next) {
  res.render('content/pt/arrays');
});

router.get('/pt/computational-complexity', function(req, res, next) {
  res.render('content/pt/computational-complexity');
});

router.get('/pt/linked-lists-intro', function(req, res, next) {
  res.render('content/pt/linked-lists-intro');
});

router.get('/pt/singly-linked-lists', function(req, res, next) {
  res.render('content/pt/singly-linked-lists');
});

router.get('/pt/doubly-linked-lists', function(req, res, next) {
  res.render('content/pt/doubly-linked-lists');
});

router.get('/pt/circular-linked-lists', function(req, res, next) {
  res.render('content/pt/circular-linked-lists');
});

router.get('/pt/stack', function(req, res, next) {
  res.render('content/pt/stack');
});

router.get('/pt/queue', function(req, res, next) {
  res.render('content/pt/queue');
});

router.get('/pt/hash-table', function(req, res, next) {
  res.render('content/pt/hash-table');
});

module.exports = router;