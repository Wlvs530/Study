// Release
/*
let config = 
{
	port : 91,

	// 缓存配置
	redisCfg :
	{
        sentinels: [{ host: '172.31.246.228', port: 6380 }],  
		name: 'mymaster',
        password: 'jyjg2019',
        db: 1,
        connectTimeout: 5000
	},

	// 数据库配置
	mysqlCfg : 
	{
		host : 'wlvs.ticp.net',
		user : 'Web',
		password : 'WebAdmin',
		database : 'Web',
		port : 3306,
		queueLimit : 10,
		connectionLimit : 5,
	},

	// Upload配置
	path :
	{
		_DataPath : "data",
		_TempPath : "data/temp",
		_DownPath :　"data/down",
		_UploadPath : "data/upload",
	
		_WeChatPath: "data/WeChat",
	},
}
*/

// Develop
let config = 
{
	port : 80,

	// 缓存配置
	redisCfg :
	{
		sentinels:[	{ host:'192.168.50.252',port:26379 } ],
		name : 'mymaster',
		password : 'jyjg2019',
		db: 1,
		connectTimeou : 5000,
	},

	// SMS
	SMSCfg: {
        sendType: 0,       //是否发送短信  0：不发送，1：发送
        apikey: '4138a0c294df4f190e95ff31feaed17a',
        Url: 'https://sms.yunpian.com/v2/sms/single_send.json',
    },

	// 数据库配置
	mysqlCfg : 
	{
		host : '192.168.50.252',
		user : 'wlvs',
		password : 'xx',
		database : 'users',
		port : 3306,
		queueLimit : 10,
		connectionLimit : 5,
	},

	// Upload配置
	path :
	{
		_DataPath : "data",
		_TempPath : "data/temp",
		_DownPath :　"data/down",
		_UploadPath : "data/upload",
	
		_WeChatPath: "data/WeChat",
	},
}

module.exports = config;