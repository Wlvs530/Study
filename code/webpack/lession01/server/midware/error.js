var Error = 
{
	Error404 : function(req, res, next) 
	{
		var _Url = req.protocol + '://' + req.headers.host + req.url;
		var _Des = 'Failed Visit Url : ' + _Url;
		res.status(404).render('frame/Error',{ErrorDes:_Des} );
	},
};

module.exports = Error;