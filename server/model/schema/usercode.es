'use strict';

import * as mongoose from 'mongoose';

let usercodeSchema = mongoose.Schema({
    usercode: {
        type: String,
        required: true
    },
    ownerid: {
        type: Number,
        required: true
    },
    takeid: Number
});

let usercode = mongoose.model('usercode', usercodeSchema, 'Usercode');

export default usercode;