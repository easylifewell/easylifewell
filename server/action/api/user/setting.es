'use strict';

import lang from '../../../lang';
import {createUserCode} from '../../../model/user';
export default async function (req, res) {
	let {realname, username} = req.query;
	if((realname&&realname.length > 7) || (username&&username.length > 7) ) {
		return res.json({
			code: 0,
			msg: lang(103)
		});
	}
	let userData = req.user;
	if(realname){
		userData.realname = realname;
		userData.save();
	}
	if(username){
		userData.username = username;
		userData.save();
	}
	res.json({
		code: 200,
		msg: lang(4001)
	})
}
