'use strict';

import {ACCOUNTMODE} from '../../../config';
import lang from '../../../lang';
import {checkSms, checkPhone, registerWithSms, getUserByPhone} from '../../../model/phone';

// 用户登录
export default async function (req, res){
	let phone = Number(req.query.phone);
	let smsCode = req.query.smscode;
    if(!/^1[3|4|5|7|8][0-9]{9}$/.test(phone) || (smsCode&&smsCode.length !== 4)) {
        return res.json({
            code: 0,
            msg: lang(103)
        });
    }
    if(!phone) {
        //参数不全
        return res.json({
            code: 0,
            msg: lang(4009)
        });
    }
    if(!checkPhone(phone)) {
        return res.json({
            code: 0,
            msg: lang(4022)
        })
    }
    if(!smsCode) {
        //参数不全
        return res.json({
            code: 0,
            msg: lang(4014)
        });
    }
    let data = await getUserByPhone(phone);
    let status;
    if(!data){
	// 新用户登录
    	status = await registerWithSms(phone, smsCode);
    }else{
	//  已有用户登录
	status = await checkSms(data.id, smsCode);
    }
	if(!status.code||!status.UIDC) {
	    return res.json(status)
	}
	res.cookie('UIDC', status.UIDC, {expires: new Date(Date.now() + 60000000000), path:'/', domain:'.m.easylifewell.com'});
    res.json({
    	code: 200,
    	msg: lang(4017)
    });
};

