var NetHead =
{
    _usCheck    : 0X809B,
    _usLen      : 0,
    _usCmd      : 0,
    _byCom      : 0,
    _byEnc      : 0,
    _uiErno     : 0,
    _uiSrvSess  : 0,
    _uiMsgOrder : 0,

    _HeadLen    : 20,

    Serialize : function()
    {
        let _iLength = 0;
        let _Buffer = Buffer.alloc(this._HeadLen);
        _Buffer.writeUInt16BE(this._usCheck,_iLength);
        _iLength += 2;

        _Buffer.writeUInt16BE(this._usLen,_iLength);
        _iLength += 2;

        _Buffer.writeUInt16BE(this._usCmd,_iLength);
        _iLength += 2;

        _Buffer.writeInt8(this._byCom,_iLength);
        _iLength += 1;

        _Buffer.writeInt8(this._byEnc,_iLength);
        _iLength += 1;

        _Buffer.writeUInt32BE(this._uiErno,_iLength);
        _iLength += 4;

        _Buffer.writeUInt32BE(this._uiSrvSess,_iLength);
        _iLength += 4;

        _Buffer.writeUInt32BE(this._uiMsgOrder,_iLength);
        _iLength += 4;

        return _Buffer;
    },

    DeSerialize : function( _Buffer )
    {
        let _iLength = 0;
        this._usCheck = _Buffer.readUInt16BE(_iLength);
        _iLength += 2;

        this._usLen = _Buffer.readUInt16BE(_iLength);
        _iLength += 2;

        this._usCmd = _Buffer.readUInt16BE(_iLength);
        _iLength += 2;

        this._byCom = _Buffer.readInt8(_iLength);
        _iLength += 1;

        this._byEnc = _Buffer.readInt8(_iLength);
        _iLength += 1;

        this._uiErno = _Buffer.readUInt32BE(_iLength);
        _iLength += 4;

        this._uiSrvSess = _Buffer.readUInt32BE(_iLength);
        _iLength += 4;

        this._uiMsgOrder = _Buffer.readUInt32BE(_iLength);
        _iLength += 4;

        return this;
    },

    ParseHead : function(_InputData)
    {
        let _Data = Buffer.from( _InputData,'binary',this._HeadLen );
        this.DeSerialize(_Data);

        if(  this._usCheck != 0X809B )
        {
            console.log("Check Position Is Incrrect.");
            return this;
        }
        else
        {
            return this;
        }
    },

    CombineHead : function(_DataBuff)
    {
        let _HeadBuff = this.Serilize();
        if( undefined != _DataBuff)
        {
            let _NetBuff = Buffer.alloc( this._HeadLen + this._usLen );
            _HeadBuff.copy(_NetBuff);
            _DataBuff.copy(_NetBuff,this._HeadLen);
            return _NetBuff;
        }
        else
        {
            return _HeadBuff;
        }        
    }
}

module.exports = NetHead;