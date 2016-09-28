'use strict';

import lang from '../../../lang';
import {getUserByPhone, sendSms, checkPhone, sendSmsForGuest} from '../../../model/phone';

// 发送验证码
export default async function (req, res){
    let phone = Number(req.query.phone);

    // 检查手机号码是否有效
    if(!checkPhone(phone)) {
        return res.json({
            code: 0,
            msg: lang(4022)
        })
    }
	console.log("send yanzhengma")
    let data = await getUserByPhone(phone);
    let status;
    if(!data) {
	console.log("phone = " + phone)
        status = await sendSmsForGuest(phone);
    }else{
        status = await sendSms(data.id);
    }
    if(status.code){
        return res.json({
            code: 200,
            msg: lang(4011, status.time),
            time: status.time
        })
    }else{
        return res.json({
            code: 200,
            msg: lang(4012, status.time),
            time: status.time
        })
    }
    res.json(data);
};

