'use strict';
import {ral} from '../lib/utils';
import * as moment from 'moment';
import * as crypto from 'crypto';

export async function send (phone, num) {
// 请替换以下四行为实际的值
	const appId = '61fd63a1d7a94f8c81c5ee5a01e96a01';
	const sid = '588379b7b6c442b674187e6de5ae8b9c';
	const token = '6c8cc0cd398a133c0000b6d64578ff22';
	const templateId = 30048;
	const time = moment().format('YYYYMMDDHHmmss');
	let auth = sid + ':' + time;
	let sig = sid + token + time;
	let md5 = crypto.createHash('md5');
	sig = md5.update(sig).digest('hex').toUpperCase();
	auth = new Buffer(auth).toString('base64');
	let data = `{"templateSMS":{ "appId":"${appId}","to":"${phone}","templateId":"${templateId}","param":"${num}"}}`;
	let len = data.length;
	return ral.fetch({
		ralName: 'SMS',
		method: 'POST',
		pack: 'string',
		path: `/2014-06-30/Accounts/${sid}/Messages/templateSMS?sig=${sig}`,
		data: data,
		headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json;charset=utf-8',
			'Content-Length': len,
			'Authorization': auth
		}
	})
}
