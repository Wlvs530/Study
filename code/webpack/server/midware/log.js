var log4js = require('log4js');

// log
// ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
var Layout =
{
	type : "pattern",
	pattern : '[%d{yyyy-MM-dd hh:mm:ss:SSS}][%-5p] %m',
};

log4js.configure(
{
	appenders :
	{
		'out' : 
		{
			type : 'stdout',
			layout : Layout,

		},

		'err' :
		{
			type : 'stderr',
			layout : Layout,
		},

		'console' :
		{
			type : 'console',
			layout : Layout,
		},

		'file' :
		{
			type : 'file',
			filename : 'App.log',
			maxLogSize : 10 * 1024 * 1024,
			backups : 10,
			layout : Layout,
		},

		'fileSync' :
		{
			type : 'fileSync',
			filename : 'App.log',
			maxLogSize : 10 * 1024 * 1024,
			backups : 10,
			layout : Layout,
		},

		'email' : 
		{
			type : '@log4js-node/smtp',
			SMTP : 
			{
				host : 'smtp.qq.com',
				port : 465,
				auth : 
				{
					user : 'Drow.ServerReport',
					pass : 'dvpxqhecsbocdeae',
				},
			},

			transport :
			{
				secure : true,
				requireTLS : true,
			},

			sendInterval : 0,
			shutdownTimeout : 5,
			recipients : "15989404508@qq.com,15989404508@139.com,18062688881@189.com",
			subject : "Server Error",
			sender : "Drow.ServerReport@qq.com",
			layout : Layout,
		},

		'Fatal1' :
		{
			type : 'logLevelFilter',
			appender : 'email',
			level : 'fatal',
			layout : Layout,
		},
	},

	categories :
	{
		default :
		{
			appenders :
			[
				'console',
				'fileSync',
				'Fatal1',
			],

			level : 'INFO',
		}
	},
});

var log = log4js.getLogger();
console.log = log.info.bind(log); 

module.exports = log;