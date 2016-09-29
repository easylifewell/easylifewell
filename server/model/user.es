'use strict';
import user from './schema/user';
import lang from '../lang';
import {KEYGEN} from '../config';

export async function passport (cookie) {
	let UIDC = decodeURIComponent(cookie);
	if(!UIDC){
		return 0;
	}
	let uidc = (new Buffer(UIDC, 'base64')).toString();
	uidc = uidc.split('_');
	let id = uidc[2];
	let data = await getUserData(id);
	if(!data || data.token !== UIDC){
		return 0;
	}
	return data;
}

export async function getUserId (phone) {
	let data = await user.findOne({
		phone: phone
	}).exec();
	//如果user不存在，返回0
	if(!data){
		return 0;
	};
	return data.id;
}

export async function getUserData (id, filter) {
	let data;
	if(Array.isArray(id)){
		data = await user.find({
			id: {$in: id}
		}, filter).exec();
	}else{
		data = await user.findOne({id: id}, filter).exec();
	}
	return data;
}

export function formatUser (data) {
	let _data = {
		id: data.id,
		region: data.region,
		phone: data.phone,
		username: data.username,
		realname: data.realname,
	};
	return _data;
}

export async function findUserList (ids, name) {
	if(!ids&&!name){
		return {
			code: 0,
			msg: lang(4000)
		};
	}
	let data;
	let filter = '-_id id username realname';
	if(ids){
		if(!Array.isArray(ids))
			ids = ids.split(',').map(x => Number(x));
		if(ids.length > 1000) {
			return {
				code: 0,
				msg: lang(4003)
			};
		};
		data = await getUserData(ids, filter);
	}else{
		data = await user.find({
			$or: [{username: name}, {realname: name}]
		}, filter).exec();
	};
    return {
    	code: 200,
    	user: data.map(x => ({
			id: x.id,
			// username: x.username,
			// realname: x.realname,
			displayname: x.realname||x.username,
		}))
    };
}

