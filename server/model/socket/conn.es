'use strict';
import {io, broadcast} from './io';
import {passport} from '../user';
let io = yog.io;
io.on('connection', async function (socket) {
	let UIDC;
	let cookie = {};
	socket.handshake.headers.cookie.split(';').forEach(function(x){
		var item = x.split('=');
		cookie[item[0].trim()] = (item[1] || '').trim();
	})
	let userData = await passport(cookie.UIDC);
	if(!userData){
		return socket.disconnect();
	}
	socket.on('join', function(data){
		socket.join(userData.id);
	})
})
export default io;
