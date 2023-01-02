var express = require('express');
var router = express.Router();
const auth = require("../middlewares/auth");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express is dope' });
});

/* GET welcome test page. */
router.get('/test',auth,(req, res, next) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = router;
