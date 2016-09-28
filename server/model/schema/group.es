'use strict';

import * as mongoose from 'mongoose';
import lang from '../../lang';

let groupSchema = mongoose.Schema({
    gid: {
        type: Number,
        required: true,
        index: true
    },
    groupname: String,
    ownerid: Number,
    userlist: Array,    //用户id按欠费从多到少排序，排第一的可以埋单
    createdate: Number,
    lastdate: Number,
    lastgroup: Boolean
});

groupSchema.statics.new = async function(ownerId, groupName){
    let now = new Date().getTime();//激活时间
    let data = await this.findOne({
        lastgroup: true
    }).exec();
    let gid = 1;
    if(data){
        gid = 1 + data.gid;
        data.lastgroup = false;
        data.save();
    }
    return this.create({
        gid: gid,  //自增id
        groupname: groupName || lang(2002, gid), // `${gid}号请客群`
        ownerid: ownerId,
        userlist: [{
            id: ownerId,
            balance: 0
        }],
        createdate: now,
        lastdate: now,
        lastgroup: true
    });
};

let group = mongoose.model('group', groupSchema, 'Group');

export default group;