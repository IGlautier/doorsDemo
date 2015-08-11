var express = require('express');
var router = express.Router();

var states = [0,0,0,0,0,0];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/states', function(req, res, next) {
	res.send(JSON.stringify(states));
});

router.post('/states', function(req,res,nex) {
	res.sendStatus(200);
	var door = parseInt(req.body.door);
	
	if(states[door] == 0) {
		states[door] = 1;
	}
	else states[door] = 0;
	
	console.log(states);
	
});

module.exports = router;
