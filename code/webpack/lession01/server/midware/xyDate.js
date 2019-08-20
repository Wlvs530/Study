Date.prototype.Format = function( _Fmt )
{
    var _Option = 
    {
        "M+": this.getMonth() + 1,  //月份
        "d+": this.getDate(),       //日
        "h+": this.getHours(),      //小时
        "m+": this.getMinutes(),    //分
        "s+": this.getSeconds(),    //秒
        "S": this.getMilliseconds() //毫秒
    };

    if ( /(y+)/.test(_Fmt) ) 
        _Fmt = _Fmt.replace( RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    
    for ( let _Key in _Option )
    {
        if ( new RegExp("(" + _Key + ")").test(_Fmt) ) 
        {
            let _Value = _Option[_Key];
            let _Result = (RegExp.$1.length == 1) ? _Value : ( ("00" + _Value).substr( ("" + _Value).length) )
            _Fmt = _Fmt.replace(RegExp.$1, _Result);
        }
    }
            
    return _Fmt;
}

module.exports = Date;