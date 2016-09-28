var  moment   = require('moment');
var crypto = require('crypto');
var request = require('superagent');

module.exports.send = function(phone, num) {
	// 以下四行请根据时机情况填写
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
	let url = 'https://api.ucpaas.com/2014-06-30/Accounts/' + sid + '/Messages/templateSMS?sig=' +sig;
	console.log(url);
	console.log(data);
	request.post(url)
	.send(data)
	.set('Accept','application/json')
	.set('Content-Type', 'application/json;charset=utf-8')
	.set('Content-Length', len)
	.set('Authorization', auth)
	.end(function(err, res) {
     		if (err || !res.ok) {
       			console.log('Oh no! error' + JSON.stringify(err));
     		} else {
       			console.log('yay got ' + JSON.stringify(res.body));
     		}
	});
}
