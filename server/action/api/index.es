'use strict';

export default async function (req, res){
	res.json({
		// 帐号登录第一个步骤
		"/api/login?{*phone}": "给手机发送验证码phone={phone}",

		// 帐号登录第二个步骤
		"/api/login/checkSms?{*phone, *smscode}" : "用户登录",

		// 用户相关操作
		"/api/user": "获取用户信息、用户若不存在自动创建",
		"/api/user/find?{id|name}": "查询用户",
		"/api/user/setting?{realname}": "设置用户真实名字realname={realname}",
		"/api/user/setting?{username}": "设置用户昵称username={username}",
	})
};

