'use strict';
import lang from './lang';
import * as io from './model/socket';
let _io = io; //比较坑的地方，如果没有这句调用，变异的时候模块会被忽略
export default async function (router){
    //默认路由
    router.route(/^\/(?!api\/?|logout).*/)
        .get(router.action('index'));
}
