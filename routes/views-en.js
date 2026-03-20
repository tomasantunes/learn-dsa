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

router.get('/en/sorting-intro', function(req, res, next) {
  res.render('content/en/sorting-intro');
});

router.get('/en/bubble-sort', function(req, res, next) {
  res.render('content/en/bubble-sort');
});

router.get('/en/selection-sort', function(req, res, next) {
  res.render('content/en/selection-sort');
});

router.get('/en/insertion-sort', function(req, res, next) {
  res.render('content/en/insertion-sort');
});

router.get('/en/merge-sort', function(req, res, next) {
  res.render('content/en/merge-sort');
});

router.get('/en/heap-sort', function(req, res, next) {
  res.render('content/en/heap-sort');
});

router.get('/en/quick-sort', function(req, res, next) {
  res.render('content/en/quick-sort');
});

router.get('/en/trees', function(req, res, next) {
  res.render('content/en/trees');
});

router.get('/en/binary-trees', function(req, res, next) {
  res.render('content/en/binary-trees');
});

router.get('/en/binary-search-trees', function(req, res, next) {
  res.render('content/en/binary-search-trees');
});

router.get('/en/avl-tree', function(req, res, next) {
  res.render('content/en/avl-tree');
});

router.get('/en/red-black-tree', function(req, res, next) {
  res.render('content/en/red-black-tree');
});

router.get('/en/pre-order-traversal', function(req, res, next) {
  res.render('content/en/pre-order-traversal');
});

router.get('/en/in-order-traversal', function(req, res, next) {
  res.render('content/en/in-order-traversal');
});

module.exports = router;