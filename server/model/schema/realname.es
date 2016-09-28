'use strict';

import * as mongoose from 'mongoose';
import idm from './idMapping';

let realnameSchema = mongoose.Schema({
    id: Number,
    realname: Array, //曾用名['敌敌畏', '赵择能',  ...]
    checkuser: Array, //确认人id[[1,3,5,34,542], [1,3,4,5,6]]
    checkdate: Array, //确认时间[[xxxx,xxxx,xxx,...], [xxx,xxx,...]]
    apply: Array, //别人发来的姓名确认请求 [{id: 111, realname: '某某人', date: xxx}, ...]
});



let realname = mongoose.model('realname', realnameSchema, 'Realname');

// 确认他人身份
realnameSchema.statics.confirm = async function(myId, targetId, realName){

}

export default realname;