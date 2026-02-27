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

router.get('/pt/sorting-intro', function(req, res, next) {
  res.render('content/pt/sorting-intro');
});

router.get('/pt/bubble-sort', function(req, res, next) {
  res.render('content/pt/bubble-sort');
});

router.get('/pt/selection-sort', function(req, res, next) {
  res.render('content/pt/selection-sort');
});

router.get('/pt/insertion-sort', function(req, res, next) {
  res.render('content/pt/insertion-sort');
});

router.get('/pt/merge-sort', function(req, res, next) {
  res.render('content/pt/merge-sort');
});

module.exports = router;