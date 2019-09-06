let SocketIO = require('socket.io');
let Session = require('session');

let Acceptor = {
    SockIO : null,
    Sessions : new Map(),
    SessionId : 1,
};

Acceptor.Create = function(http){
    this.SockIO = SocketIO( http );

    this.SockIO.on('connection', (Sock)=>{
        console.log('New One Connected.');
        
        let _Session = new Session( this.SessionId,Sock,this );
        this.Sessions.set(this.SessionId,_Session);
        ++this.SessionId;
    });
}

Acceptor.Del = function(_SessId){
    this.Sessions.delete(_SessId);
    this.SockIO.emit('BC_ExitRoom',_SessId);
}

module.exports = Acceptor;