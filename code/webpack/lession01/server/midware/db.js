
var pool = require('mysql').createPool(config.mysqlCfg);

var mysql = {};

mysql.Query = async function( {sql,values} )
{
    return new Promise( (resolve)=>{
        mysql.query({sql,values},(err,vals,fields)=>{
			if( null != err && 0 != err.errno )
			{
				console.log(err);
				resolve(null);
			}
			else if( vals.length == 0 )
				resolve(null);
			else
				resolve(vals);
        });
    }).then( (_Obj)=>{
		return _Obj;
	}).catch();
}

mysql.query = function( {sql,values},callback )
{
	pool.getConnection( function( err,conn )
	{
		if( err )
		{
			callback(err,null,null);
		}
		else
		{
			conn.query( {sql,values},function( err,vals,fields ) 
			{
				conn.release();
				callback(err,vals,fields);
			});
		}
	});
};

module.exports = mysql;