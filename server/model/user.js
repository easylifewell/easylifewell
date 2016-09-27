import user from './schema/user';
import idm from './schema/idMapping';
import usercode from './schema/usercode';
import lang from '../lang';

module.exports.passort = function(cookie) {
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

module.exports.getUserId = function(accountSystem, sourceId) {
	let data = await idm.findOne({
		accountsystem: accountSystem,
		sourceid: sourceId
	}).exec();
	//如果user不存在，激活新用户
	if(!data){
		return 0;
		// if(!userName){
		// 	return -1;
		// }
		// data = await user.active(accountSystem, sourceId, userName, phone, born);
	};
	return data.id;
}

module.exports.getUserData = function(id, filter) {
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

module.exports.formatUser = function(data) {
	let _data = {
		id: data.id,
		region: data.region,
		phone: data.phone,
		username: data.username,
		realname: data.realname,
		friend: data.friend,
		friendapply: data.friendapply,
		group: data.group,
		totalpay: data.totalpay,
		totalowe: data.totalowe,
		balance: data.totalpay - data.totalowe,
		moregroup: data.moregroup,
		morefriend: data.morefriend,
		moreusercode: data.moreusercode,
		invite: data.invite
	};
	return _data;
}

module.exports.findUserList = function (ids, name) {
	if(!ids&&!name){
		return {
			code: 0,
			msg: lang(4000)
		};
	}
	let data;
	let filter = '-_id id username realname totalpay totalowe';
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
			balance: x.totalpay - x.totalowe
		}))
    };
}

modules.exports.createUserCode = function (id) {
	let data = await getUserData(id);
	let limit = data.moreusercode;
	if(limit <= 0) {
		return {
			code: 0,
			msg: lang(4004, limit)
		}
	}
	let gen = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	function buildCode (num, str) {
		if(num <= 0) return str;
		if(!str) str = '';
		num--;
		str += gen[Math.round(Math.random()*62)];
		return buildCode(num, str);

	}
	let code = id + '-' + buildCode(6);
	let _data = await usercode.create({
		usercode: code,
		ownerid: id
	});
	data.usercode.push(code);
	data.moreusercode--;
	data.save();
	return {
		code: 200,
		msg: lang(4004, data.moreusercode),
		usercode: code
	}
}
