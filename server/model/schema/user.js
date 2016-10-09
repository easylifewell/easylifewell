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
    friend: Array,
    friendapply: Array,
    group: Array,
    invite: Array,
    totalpay: Number,
    totalowe: Number,
    moregroup: Number,
    morefriend: Number,
    moreusercode: Number,
    createdate: Number,
    logindate: Number,
    lastuser: Boolean
});

userSchema.statics.active = async function( userName, phone, born){
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

    return this.create({
        id: id,  //自增id
        region: '0086',
        phone: phone,
        born: born,
        username: userName,
        realname: '',
        findbyrealname: false,
        createdate: now,
        totalpay: 0,
        totalowe: 0,
        moregroup: 10,
        morefriend: 1000,
        moreusercode: 5,
        lastuser: true
    });
};



let user = mongoose.model('user', userSchema, 'User');

export default user;