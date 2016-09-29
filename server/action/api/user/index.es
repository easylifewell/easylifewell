'use strict';

import {formatUser} from '../../../model/user';

export default async function (req, res){
    let data = formatUser(req.user);
    res.json(data);
};
