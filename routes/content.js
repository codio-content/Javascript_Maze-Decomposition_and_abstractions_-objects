
var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();

// Basic object demo
router.get('/js-1', function(req, res) {
  res.render('js-1');
}); 

// Challenge escape
router.get('/ch-1', function(req, res) {
  res.render('ch-1');
}); 

// Challenge escape with code
router.get('/ch-2', function(req, res) {
  res.render('ch-2');
}); 

// Object creation
router.get('/js-2', function(req, res) {
  res.render('js-2');
}); 



module.exports = router;



