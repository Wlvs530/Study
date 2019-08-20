var IORedis = require('ioredis');
var config = require('./appCfg');

const Redis = new IORedis(config.redisCfg);
Redis.on('error',(err)=>{
    console.log('Redis ' + err );
});
    
Redis.Get = async function(_Key)
{
    return new Promise( (Resolve,Reject)=>{
        Redis.get(_Key,(_Error,_Result)=>{
            if( null == _Error )
                Resolve(_Result);
            else
                Reject(null);
            
        });
    })
    .then( (_Ret)=>{ return _Ret ;} )
    .catch( (_Ret)=>{ return _Ret ;} );
};

Redis.Set = async function(Key,Value,Expire = 900 )
{
    return new Promise( (resolve)=>{
        Redis.set(Key,Value,'Ex',Expire,(error,response)=>{
            resolve();
        });
    }).then();    
} 

module.exports = Redis;