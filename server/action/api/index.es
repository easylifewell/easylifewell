'use strict';

export default async function (req, res){
	res.json({
		"/api/sms?{*phone}": "给手机发送验证码phone={phone}",


		"/api/user": "获取用户信息、用户若不存在自动创建",
		"/api/user/find?{id|name}": "查询用户",


		"/api/user/usercode?{*action, *usercode, *phone, *username}": "首次登录需要提供邀请码usercode={usercode}, username={usernmae}, action=take发送验证码至手机",
		"/api/user/usercode?{*action}": "给自己添加一枚邀请码action=create",

		"/api/user/setting?{realname}": "设置用户真实名字realname={realname}",
		"/api/user/setting?{username}": "设置用户昵称username={username}",
		"/api/user/setting?usercode=add": "新增注册邀请码",

		"/api/login?{*phone}": "账号登录step1",
		"/api/login/checkInvite?{*phone, *invitecode}": "账号登录step2.1(已注册用户跳过此步)",
		"/api/login/checkInvite?{*phone, *invitecode, smscode}": "账号登录step2.2(已注册用户跳过此步)",
		"/api/login/checkSms?{*phone, *smscode}": "账号登录step3",
	})
};

