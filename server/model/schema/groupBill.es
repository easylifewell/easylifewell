'use strict';

import * as mongoose from 'mongoose';

let groupBillSchema = mongoose.Schema({
    gid: Number,
    pay: Array,
    owe: Array,
    theme: String,
    place: String,
    createdate: Number,
    isdrop: Boolean,
    dropdate: Number

});

let groupBill = mongoose.model('groupBill', groupBillSchema, 'GroupBill');

export default groupBill;