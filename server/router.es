'use strict';
import lang from './lang';
export default async function (router){
    //默认路由
    router.route(/^\/(?!api\/?|logout).*/)
        .get(router.action('index'));
}
