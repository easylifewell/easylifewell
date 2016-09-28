'use strict';

import * as mongoose from 'mongoose';

let guestSchema = mongoose.Schema({
    phone: {
        type: Number,
        required: true,
        index: true
    },
    sms: String,
    smsSendData: Number,
    smsChangeDate: Number
});

let guest = mongoose.model('guest', guestSchema, 'Guest');

export default guest;