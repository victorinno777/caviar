var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/fetch', async function (req, res) {
	try {
		const result = await getData();
		res.json(result);
	} catch (e) {
		res.end(e.message || e.toString());
	}
});

module.exports = router;
