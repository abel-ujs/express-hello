var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.dir(req.params)
	console.dir(req.query)
  res.render('index', { title: 'Express' });
});

module.exports = router;