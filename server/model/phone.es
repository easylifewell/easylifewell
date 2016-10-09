'use strict';
import user from './schema/user';
import guest from './schema/guest';
import lang from '../lang';
import {send} from './sms';
import * as crypto from 'crypto';
import {KEYGEN} from '../config';
import {ANIMAL} from './animal';

export function checkPhone (phone) {
    if(/^1[3|4|5|7|8][0-9]{9}$/.test(phone)){
        return true
    }
}

// 根据手机号获得用户信息
export async function getUserByPhone (phone) {
	let data = await user.findOne({
		phone: phone
	}).exec();
	return data;
}

//非首次登录发送验证码的函数 
export async function sendSms (id) {
	let data = await user.findOne({id: id}).exec();
	return sendSmsByData(data);
}

// 首次登录发送验证码的函数
export async function sendSmsForGuest (phone) {
	let data = await guest.findOne({phone: phone}).exec();
	if(!data) {
		data = await guest.create({
			phone: phone
		})
	}
	return sendSmsByData(data);
}

function sendSmsByData (data) {
    let now = new Date().getTime();

// 第一次发送短信，或者短信过期，再次发送
    if(!data.sms || now - data.smsChangeDate >= 0) {
    	let code = Math.random().toString().slice(2,6);
    	data.sms = code;
    	data.smsSendData = now;
    	data.smsChangeDate = now + 300000;
    	data.save();
    	send(data.phone, code);
    	return {
    		code: 200,
    		time: 60
    	}
    }

// 60s内不允许再次发送短信
    let sendover = now - data.smsSendData;
    if(sendover < 60000) {
    	return {
    		code: 0,
    		time: Math.floor((60000 - sendover)/1000)
    	}
    }

// ????
    let changeover = now - data.smsChangeDate;
    if(changeover < 0 ){
    	data.smsSendData = now;
    	data.save();
    	send(data.phone, data.sms);
    	return{
    		code: 200,
    		time: 60
    	}
    }
}

export async function checkSms (id, smsCode) {
	let data = await user.findOne({id: id}).exec();
	let checkData = checkSmsByData(data, smsCode);
	if(!checkData.code){
		return checkData;
	}
    return createUIDC(data);

}

export async function checkSmsForGuest (phone, smsCode) {
	let data = await guest.findOne({
		phone: phone
	}).exec();
	return checkSmsByData(data, smsCode);
}

function checkSmsByData (data, smsCode){
    let now = new Date().getTime();
    if(now - data.smsChangeDate >= 0) {
    	return {
    		code: 0,
    		msg: lang(4018)
    	}
    }
    if(data.sms !== smsCode) {
    	return {
    		code: 0,
    		msg: lang(4016)
    	}
    }
    return {
    	code: 200,
    	data: data
    }
}

function createUIDC (userData) {
    let now = new Date().getTime();
    let head = crypto.createHash('md5').update(KEYGEN + userData._id + now).digest('hex');
    let UIDC = new Buffer(head+'_phone_'+userData.id).toString('base64');
    userData.token = UIDC;
    userData.logindate = now;
    userData.save();
    return {
    	code: 200,
    	UIDC: UIDC,
    	logindate: now
    };
}

export async function register(guestData){
	let phone = guestData.phone
	let username = ANIMAL[Math.round(Math.random() * ANIMAL.length)];
	let data = await user.active(username, phone);	//  在数据库中存储信息
	//登录信息更新
	data.sms = guestData.smsCode;
	data.smsSendData = guestData.smsSendData;
	data.smsChangeDate = guestData.smsChangeDate;
	let _data = createUIDC(data);
	return {
		code: 200,
		UIDC: _data.UIDC,
		msg: lang(4023)
	}
}

export async function registerWithSms(phone, smsCode) {
	let checkData = await checkSmsForGuest(phone, smsCode);
	if(!checkData.code){
		return checkData;
	}
	return register(checkData.data);
}

