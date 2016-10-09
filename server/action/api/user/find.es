'use strict';

import lang from '../../../lang';
import {findUserList} from '../../../model/user';

export default async function (req, res){
	let id = req.query.id;
	let name = req.query.name;
	if((id&&id.length > 15) || (name&&name.length > 7)) {
		return res.json({
			code: 0,
			msg: lang(103)
		});
	}
	let data = await findUserList(id, name);
	res.json(data);
};
