'use strict';
import {ral} from '../lib/utils';
import * as moment from 'moment';
import * as crypto from 'crypto';

export async function send (phone, num) {
	const appId = '966b998623804b34bee5a17bd1a7a53f';
	const sid = '239efa53db848efa6acf82e4b2ca49ab';
	const token = 'f35ced5136c6499e770731b6775da756';
	const templateId = 23823;
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
