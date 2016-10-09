'use strict';

import * as mongoose from 'mongoose';

let userLogSchema = mongoose.Schema({
    id: Number,
    log: String,
    createdate: Number
});

let userLog = mongoose.model('userLog', userLogSchema, 'UserLog');

export default userLog;