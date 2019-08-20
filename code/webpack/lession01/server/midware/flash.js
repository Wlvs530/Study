function _flash(type, msg) 
{
	if (this.session === undefined) 
		throw Error('req.flash() requires sessions');

	var msgs = (this.session.flash = this.session.flash || {});
	if (type && msg) 
	{
		msgs[type] = msg;
	} 
	else if (type) 
	{
		var arr = msgs[type];
		delete msgs[type];
		return arr;
	} 
	else 
	{
		this.session.flash = {};
		return msgs;
	}
}

var flash = function()
{
	return function(req, res, next) 
	{
    	req.flash = _flash;
    	next();
    }
}

module.exports = flash;