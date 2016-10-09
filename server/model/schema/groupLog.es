'use strict';

import * as mongoose from 'mongoose';

let groupLogSchema = mongoose.Schema({
    gid: Number,
    log: String,
    createdate: Number
});

let groupLog = mongoose.model('groupLog', groupLogSchema, 'GroupLog');

export default groupLog;