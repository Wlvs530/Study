
function Session( _Id,_Sock,_Acceptor ){
    this.Socket = _Sock;
    this.Acceptor = _Acceptor;
    this.ScoketIO = _Acceptor.SockIO;

    this.Score = 0;
    this.Name = '';
    this.SessionId = _Id;

    this.Enter();
    return this;
}

Session.prototype.Enter = function(){
    this.RegDisconnet();
    this.RegChangeName();
    this.RegEnterRoom();
    this.RegStartGame();
    this.RegStopGame();
    this.RegClickBall();
}

// DisConnet
Session.prototype.RegDisconnet = function(){
    this.Socket.on('disconnect',()=>{
        this.Acceptor.Del( this.SessionId);
        console.log('User ' + this.Name + ' Disconnect.');
    });
}

// ChangeName
Session.prototype.RegChangeName = function(){
    this.Socket.once('C2S_ChangeName',(data)=>{
         // 检查
        let _SameName = false;
        this.Acceptor.Sessions.forEach( (_Session) => {
            if( _Session.Name == data ){
                _SameName  = true;
            }
        })

        // 同名
        if( _SameName ){
            this.Socket.emit('S2C_ChangeName',{ErrorCode:1,ErrorDes:'Same Name'});
            log.trace( 'Find Same Name,Cannt Change From %s To %s',data,this.Name );
            return;
        }

        // 成功
        this.Name = data;
        this.Socket.emit('S2C_ChangeName',{ErrorCode:0});
        log.trace( 'Change Name %s OK' ,data );
    });
}

// EnterRoom
Session.prototype.RegEnterRoom = function(){
    this.Socket.once('C2S_EnterRoom',(data)=>{
        let UserList = [];
        this.Acceptor.Sessions.forEach( (_Session) => {
            if( _Session.Name != ''){
                let _User = {
                    UId:_Session.SessionId,
                    Name:_Session.Name,
                    Score:_Session.Score
                }
    
                UserList.push(_User);
            }
        });

        let User = {
            UId:this.SessionId,
            Name:this.Name,
            Score:this.Score
        };
        this.Socket.emit('S2C_EnterRoom',{UserList,User});
        this.ScoketIO.emit('BC_EnterRoom',User);
    });

}

// BeginGame
Session.prototype.RegStartGame = function(data){
    this.Socket.on('C2S_StartGame',()=>{
        this.ScoketIO.emit('BC_StartGame');
    });
}

// StopGame
Session.prototype.RegStopGame = function(data){
    this.Socket.on('C2S_StopGame',()=>{
        this.ScoketIO.emit('BC_StopGame');
    });
}

// ClickBall
Session.prototype.RegClickBall = function(data){
    this.Socket.on('C2S_ClickBall',()=>{
        // Add 防止作弊代码
        ++this.Score;
        this.ScoketIO.emit('BC_ClickBall',this.SessionId);
    });
}

// Print
Session.prototype.Print = function(){
    console.log('{ SessionId : ' + this.SessionId + ', Name : ' + this.Name + ' }' );
}

module.exports = Session;