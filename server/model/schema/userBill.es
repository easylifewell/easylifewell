'use strict';

import * as mongoose from 'mongoose';

let userBillSchema = mongoose.Schema({
    id: Number,
    bid: {
    	type: String,
    	required: true,
    	index: true
    },
    gid: Number,
    paymoney: Number,
    owemoney: Number,
    theme: String,
    place: String,
    createdate: Number,
    isdrop: Boolean,
    dropdate: Number
});

let userBill = mongoose.model('userBill', userBillSchema, 'UserBill');

export default userBill;