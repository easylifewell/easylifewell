'use strict';

import * as mongoose from 'mongoose';

let userSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        index: true
    },
    region: String,
    phone: Number,
    sms: String,
    smsSendData: Number,
    smsChangeDate: Number,
    token: String,
    password: String,
    usercode: Array,
    born: Number,
    username: String,
    realname: String,
    findbyrealname: Boolean,
    createdate: Number,
    logindate: Number,
    lastuser: Boolean
});

/**
** @ userName
** @ phone
** @ born
**/
userSchema.statics.active = async function(userName, phone, born){
    let now = new Date().getTime();//激活时间
    let data = await this.findOne({
        lastuser: true
    }).exec();
    let id = 1;
    if(data){
        id = 1 + data.id;
        data.lastuser = false;
        data.save();
    }

    // 创建用户
    return this.create({
        id: id,  //自增id
        region: '0086',
        phone: phone,
        born: born,
        username: userName,
        realname: '',
        findbyrealname: false,
        createdate: now,
        lastuser: true
    });
};



let user = mongoose.model('user', userSchema, 'User');
mongoose.connect('mongodb://45.79.85.217:27017/easylifewell');
export default user;
