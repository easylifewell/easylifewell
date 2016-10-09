'use strict';
import getIndexData from '../model/index';
export default async function(req, res) {
    res.render('home/page/index.tpl', getIndexData());
};
