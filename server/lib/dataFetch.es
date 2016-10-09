'use strict';

import * as _ from 'lodash';
import * as _path from 'path';
import * as _querystring from 'querystring';
import * as _base from './base';
/**
 * 新建接口的方法
 *
 * @param  {Object}    ralConfig          ral的一些配置
 * @param  {String}    ralConfig.ralName  ral配置名
 * @param  {String}    filename           当前运行文件的路径(__filename)
 * @return {Promise}                      Promise
 */
export function onRal (ralConfig, filename, isMock) {
    let beginTime = new Date();
    if (_.isEmpty(ralConfig) || _base.MOCK || isMock) {
        if(!filename){
            return yog.Promise.resolve({msg:'没有mock文件'});
        }
        let path = _path.parse(filename);
        return yog.Promise.resolve(require(path.dir+'/'+path.name+'.json'));
    }else{
        ralConfig.path = (ralConfig.pathRoot || '') + (ralConfig.path || '');
        if (!ralConfig.ralName) {
            return yog.Promise.reject({
                msg: '本次获取数据没有配置ral名'
            });
        }
    }
    return yog.ralPromise(ralConfig.ralName, ralConfig)
        .then(function (data) {
            if (_base.DEBUG) {
                appendDebug(data, ralConfig, beginTime);
            }
            // 15未登录
            if (data.code === 15) {
                data.data = _base.getLoginOrigin();
            }
            return data;
        })
        .catch(function (error) {
            if (error.statusCode === 302) {
                error.statusCode = 401;
                error.data = _base.getLoginOrigin();
            }
            if (error.toString() === 'Error: request time out') {
                error.statusCode = 408;
            }
            let data = {
                code: error.statusCode || 500,
                error: String(error),
                data: error.data
            }
            if(_base.DEBUG){
                appendDebug(data, ralConfig);
            }
            return yog.Promise.reject(data);
        });
};

export var env = process.env.YOG_ENV || 'prod';

export function appendDebug (data, ralConfig, beginTime) {
    var midfix = `.${env}`;
    if(env == 'prod'){
        midfix = '';
    }
    data.debug = {};
    data.debug.env = env;
    data.debug.ralConf = `home${midfix}.js`;
    data.debug.ralName = ralConfig.ralName;
    data.debug.pathRoot = ralConfig.pathRoot;
    data.debug.delay = new Date() - beginTime + 'ms';
    try{
        data.debug.proxy_pass = fullUrl(ralConfig);
    }catch(e){
        data.debug.proxy_pass = '请检查ralName是否在home存在';
    }
    return data;
};

export function hostUrl (ralConfig) {
    let raw = yog.ral.getRawConf()[ralConfig.ralName];
    let server = raw.server[0];
    return raw.protocol + '://' + server.host + (server.port === 80 ? '' : (':' + server.port));
};

export function rootUrl (ralConfig) {
    return hostUrl(ralConfig) + ralConfig.pathRoot;
};

export function fullUrl (ralConfig) {
    let data = _querystring.stringify(ralConfig.data);
    return hostUrl(ralConfig) + ralConfig.path + (data ? '?' + data : '');
}
