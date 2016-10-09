'use strict';
import * as socketio from 'socket.io';
yog.io = socketio(yog.server);
yog.broadcast = function (ids, eventName, data) {
	if(Array.isArray(ids)){
		ids.forEach(function(id){
			yog.io.in(id).emit(eventName, data);
		})
	}else{
		yog.io.in(ids).emit(eventName, data);
	}
}
let io = yog.io;
let broadcast = yog.broadcast;
console.log('socketio初始化成功')
export {io, broadcast};
