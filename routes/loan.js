var express = require('express');
var router = express.Router();
const auth = require("../middleware/auth");

router.post('/', function(req, res, next) {
    res.send('respond with a resource');
    res.status(200);
  });
  
  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
    res.status(200);
  });

  router.get('/:id', function(req, res, next) {
    res.send('respond with a resource');
    res.status(200);
  });

  router.put('/:id', function(req, res, next) {
    res.send('respond with a resource');
    res.status(200);
  });

  //Apply
  router.post('/apply', function(req, res, next) {
    res.send('respond with a resource');
    res.status(200);
  });

  //Prepay
  router.post('/:id/prepay', function(req, res, next) {
    res.send('respond with a resource');
    res.status(200);
  });

  //Schedule
  router.get('/:id/schedule', function(req, res, next) {
    res.send('respond with a resource');
    res.status(200);
  });

  //Reminders
  router.post('/:id/reminders', function(req, res, next) {
    res.send('respond with a resource');
    res.status(200);
  });

  router.put('/:id/reminders', function(req, res, next) {
    res.send('respond with a resource');
    res.status(200);
  });

  router.get('/:id/reminders', function(req, res, next) {
    res.send('respond with a resource');
    res.status(200);
  });

  //Documents
  router.post('/:id/documents', function(req, res, next) {
    res.send('respond with a resource');
    res.status(200);
  });

  

module.exports = router;