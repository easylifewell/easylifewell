'use strict';

import * as crypto from 'crypto';

let cache = {};

export function get (key) {
	let item = cache[key];
	if(item && item.expiry > new Date()){
		return item.data;
	}else{
		delete cache[key];
	};
}

export function set (key, value, life) {
	let expiry = new Date() - 0 + parseInt(life || 86400000);
	Object.assign(cache, {
		[key]: {
			data: value,
			expiry: expiry
		}
	});
}

export function gen (str) {
	let md5 = crypto.createHash('md5');
	md5.update(str);
	return md5.digest('hex');
}
