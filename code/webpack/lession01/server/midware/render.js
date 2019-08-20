var fs = require('fs');

var FileData = {};

var Render = 
{
    __express : function( _FilePath, _Options, _Callback )
    {
        if( FileData.hasOwnProperty(_FilePath) )
          return _Callback( null,FileData[_FilePath] );
        else
          fs.readFile(_FilePath, 'utf8',function (_Error, _Content) 
          {
              if (_Error) 
                  return _Callback( new Error(_Error) );
              else
              {
                  FileData[_FilePath] = _Content;
                  return _Callback(null, _Content );
              }
          });
    }
}

module.exports = Render;