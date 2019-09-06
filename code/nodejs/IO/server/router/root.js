var router = require('express').Router();
var Test = require('test');
//var WhatPlus = require('whatplus');

router.get('/', function(req, res, next) 
{
	res.send('Main Page');
});

router.get('/dev', function(req, res, next) 
{
	res.send('Dev Page');
});

router.get('/deb', function(req, res, next) 
{
	res.send('Deb Page');
});

router.get('/test', function(req, res, next) 
{
	res.render('test');
});

function StepTwoRouter(_App)
{
	_App.use('/test',Test);
	// _App.use('/whatplus',WhatPlus);
	// _App.use('/dev/whatplus',WhatPlus);
	// _App.use('/deb/whatplus',WhatPlus);
}

module.exports = router;
module.exports.StepTwoRouter = StepTwoRouter;