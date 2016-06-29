var SEND = function(){
    function SocketErrorSend(socket, prop)
    {
        var tProp = prop || {};

        console.error('SocketErrorSend');
        console.error(tProp.message);

        socket.emit('message', {
            status:tProp.status || 99,
            message:tProp.message || 'error',
            action:tProp.action || 'error',
            data:tProp.data
        });
    }

    function SocketSuccessSend(socket, prop)
    {
    	var tProp = prop || {};

        socket.emit('message', {
            status:tProp.status || 0,
            message:tProp.message || 'ok',
            action:tProp.action || '',
            data:tProp.data
        });
    }

	this.SocketErrorSend = SocketErrorSend;
	this.SocketSuccessSend = SocketSuccessSend;

	return this;
};