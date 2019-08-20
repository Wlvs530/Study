var url = require( 'url' );
var http = require( 'http' );
var https = require( 'https' );
var qs = require( 'querystring' );

var realHttp = http;

var xyHttp = {

	get: function( { Url, param }, endCallback )
	{
		var path = '';
		if ( undefined == param )
			path = Url;
		else
		{
			var _Content = qs.stringify( param );
			path = Url + "?" + _Content;
		}

		if ( "s" === Url[ 4 ] || "S" === Url[ 4 ] )
			realHttp = https;
		else
			realHttp = http;

		realHttp.get( path, ( response ) =>
		{
			var body = "";
			response.on( 'data', ( data ) =>
			{
				body += data;
			} );
			response.on( 'end', ( data ) =>
			{
				if ( undefined != data )
					body += data;
				endCallback( body );
			} );
			response.on( 'error', ( e ) =>
			{
				console.error( 'Failed Request ' + e.message );
			} );
		} )
	},

	post: function( { Url,param,type }, endCallback )
	{
		let _Content = '';
		let _Type = type || 'application/x-www-form-urlencoded';
		if ( param )
		{
			if( 'application/x-www-form-urlencoded' == _Type )
				_Content = qs.stringify( param );
			else
				_Content = param;
		}
			

		var URL = url.parse( Url );
		if ( "s" === Url[ 4 ] || "S" === Url[ 4 ] )
			realHttp = https;
		else
			realHttp = http;
		var _Req = realHttp.request(
		{
			host: URL.host,
			port: URL.port,
			path: URL.path,
			method: 'POST',
			headers:
			{
				'Content-Type': _Type,
				'Content-Length': _Content.length
			}
		},

		( response ) =>
		{
			var body = "";
			response.on( 'data', ( data ) =>
			{
				body += data;
			} );

			response.on( 'end', () =>
			{
				endCallback( body );
			} );
		} );

		if ( _Content.length > 0 )
			_Req.write( _Content );

		_Req.end();
	},
}

module.exports = xyHttp;