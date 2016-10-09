'use strict';

import * as _config from '../config';
import * as _ from 'lodash';

export var loginUrls = {
    rd: _config.LOGINURL_RD,
    qa: _config.LOGINURL_RD,
    prod: _config.LOGINURL_PROD
};

export var config = _config;

/**
 * @des 异常处理，根据返回的code码跳转到相应的页面 
 *      error page [code:404|500|forbidden]
 *
 * @code {string} 服务端返回的状态码
 * @return {string} 根据状态码返回跳转到的页面
 */
export function errorPage (code) {
    return `http://static.pay.baidu.com/resource/status/${code}.html`;
};

/**
 * @des 获取登录路径 [针对不同环境返回不同登录路径]
 *
 * @ralName {string} 机器配置名
 * @return {string} 登录路径
 */
export function getLoginUrl (ralName) {
    let rawConf = yog.ral.getRawConf()[ralName || _config.RAL_NAME];
    let type = rawConf.server[0].type;
    return loginUrls[type];
};

/**
 * @des 路径匹配 对getLoginUrl()方法返回的链接进行二次处理
 *
 * @return {string} 完整路径
 */
export function getLoginOrigin () {
    return getLoginUrl().replace('/v2/?login', '');
};

