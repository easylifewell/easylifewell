'use strict';
import * as moment from 'moment';
import * as crypto from 'crypto';
import * as request from 'request';

export async function send (phone, num) {
	// 以下四行请根据时机情况填写
	const appId = '';
	const sid = '';
	const token = '';
	const templateId = ;

	const time = moment().format('YYYYMMDDHHmmss');
	let auth = sid + ':' + time;
	let sig = sid + token + time;
	let md5 = crypto.createHash('md5');
	sig = md5.update(sig).digest('hex').toUpperCase();
	auth = new Buffer(auth).toString('base64');
	let data = `{"templateSMS":{ "appId":"${appId}","to":"${phone}","templateId":"${templateId}","param":"${num}"}}`;
	let len = data.length;
	return ral.fetch({
		method: 'POST',
		host:	'api.ucpaas.com',
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
