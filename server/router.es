'use strict';
import lang from './lang';
import * as io from './model/socket';
import {passport} from './model/user';
let _io = io; //比较坑的地方，如果没有这句调用，变异的时候模块会被忽略

export default async function (router){

    router.use(async function (req, res, next) {
        let data = await passport(req.cookies.UIDC);
        req.user = data;
        if(/^\/api\/(?!login).*/.test(req.url)){
            if(!data){
                return res.json({
                    code: -1,
                    msg: lang(102)
                })
            }
        }
        next();
    });

    //默认路由
    router.route(/^\/(?!api\/?|logout).*/)
        .get(router.action('index'));
}
