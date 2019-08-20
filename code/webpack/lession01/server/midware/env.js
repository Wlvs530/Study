var Path = require('path');
var Add = require('app-module-path').addPath;

var Env = 
{
	App : null,
	Express : null,

	init : function( _App,_Express )
	{
		this.App = _App;
		this.Express = _Express;
	},

	set : function( _Type,_Path )
	{
		_Path = Path.join( Path.resolve("."), _Path );
		switch(_Type)
		{
		case 'View':
			this.App.set( 'views', _Path );
			break;

		case 'Static':
			this.App.use( this.Express.static(_Path) );
			break;

		case 'Module':
			Add(_Path);
			break;
		
		defalut:
			break;
		}
	},
};

module.exports = Env;