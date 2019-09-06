// express
var express = require('express');
var app = express();

// Http
var http = require('http');

// Env
var env = require('./server/midware/env');
env.init(app,express);
env.set('Static','client');
env.set('View','server/html');
env.set('Module','server/router');
env.set('Module','server/midware');
env.set('Module','server/logic');

// View
app.set( 'view cache', false );
app.set( 'view engine', 'html' );
//var render = require('render');
//app.engine('html', render.__express);
var nunjucks = require('nunjucks');
nunjucks.configure( 'client/html',
{
	autoescape: true,
	noCache : false,
	express: app,
	watch: true,
	tags : 
	{
		variableStart: '{$',
    	variableEnd: '$}',
	}
} );

// MiddleWare
global.log = require('log');
global.config = require('appCfg');
var error = require('error');
var flash = require('flash');
var multer = require('multer');
var cookie = require('cookie-parser');
var session = require('express-session');
var bodyParser = require( 'body-parser' );

app.use( flash() );
app.use( cookie() );
app.use( bodyParser.raw() );
app.use( bodyParser.json() );
app.use( bodyParser.text() );
app.use( bodyParser.urlencoded({extended: true}) );
app.use( session(
{
	secret: 'DrowApp',
	resave: true,
	saveUninitialized: true,
}) );
app.use( multer(
{
	storage: multer.diskStorage(
	{
		destination: config.path._TempPath,
		filename: function( req, file, cb )
		{
			cb( null, file.originalname );
		},
	} ),
} ).single( 'UploadFile' ) );

// Router Array
var _Root = require('root');
app.use('/',_Root);
_Root.StepTwoRouter(app);

// Error
app.use( error.Error404 );

// Server
let server = http.createServer(app);

// Socket.io
let Acceptor = require('acceptor');
Acceptor.Create(server);

// Listen
server.listen( 80, ()=>
{
	log.info( 'Application Listening At Port %s', server.address().port );
} );

module.exports = app;