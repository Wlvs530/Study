var router = require('express').Router();

router.get('/vue', function(req, res, next) 
{
	res.render('test/vue');
});

module.exports = router;