var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.dir(req.query);
  res.send('respond with a resource');
});

router.use(function(req,res,next){
	next();
})

module.exports = router;
