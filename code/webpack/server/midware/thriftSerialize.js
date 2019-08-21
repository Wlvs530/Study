var thrift = require('thrift');

thrift.TFramedTransport.prototype.XyFlush = function()
{
  var out = Buffer.alloc(this.outCount),
      pos = 0;

  this.outBuffers.forEach(function(buf) 
  {
    buf.copy(out, pos, 0);
    pos += buf.length;
  });

  this.outBuffers = [];
  this.outCount = 0;
  return out;
}

var ThriftSerialize = 
{
    Serialize : function(_Type)
    {   
        let _Transport = new thrift.TFramedTransport();
        let _Protocol = new thrift.TBinaryProtocol(_Transport);
        _Type.write(_Protocol);

        return _Transport.XyFlush();
    },

    DeSerialize : function(_Type,_Bytes)
    {
        let _Transport = new thrift.TFramedTransport(_Bytes);
        let _Protocol = new thrift.TBinaryProtocol( _Transport);
        _Type.read(_Protocol);
    },

    Compact : function(_Type)
    {
        let _Transport = new thrift.TFramedTransport();
        let _Protocol = new thrift.TCompactProtocol(_Transport);
        _Type.write(_Protocol);

        return _Transport.XyFlush();
    },

    UnCompact : function(_Type,_Bytes)
    {
        let _Transport = new thrift.TFramedTransport(_Bytes);
        let _Protocol = new thrift.TCompactProtocol( _Transport);
        _Type.read(_Protocol);
    },
};

module.exports = ThriftSerialize;