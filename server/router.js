module.exports = function(router){
    // a restful api example
    //默认路由
    router.route(/^\/(?!api\/?|logout).*/)
        .get(router.action('index'));
};