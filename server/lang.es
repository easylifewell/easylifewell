'use strict'

export default function lang (...$) {
	let ms = {
		'101': `没有用户名无法激活新用户`,
		'102': `请登录百度账号`,
		'103': `参数超出限制`,
		'104': `参数无效`,

		'1000': `账号“${$[1]}”已经是您的好友了`,
		'1001': `账号${$[1]}不存在`,
		'1002': `向账号“${$[1]}”申请添加为好友`,
		'1003': `好友添加成功，与${$[1]}成为好友`,
		'1004': `账号“${$[1]}”没有向您申请过好友`,
		'1005': `不能添加自己为好友`,
		'1006': `好友请求已清空`,
		'1007': `好友已达上限`,
		'1008': `拒绝添加好友`,

		'2000': `您创建的群已达上限`,
		'2001': `${$[1]}创建成功`,
		'2002': `${$[1]}号请客群`,
		'2003': `您不能邀请他人加入这个群`,
		'2004': `邀请入群的用户不是您的好友`,
		'2005': `没有邀请任何人`,
		'2006': `没有邀请人不能加入此群`,
		'2007': `您已经加入此群`,
		'2008': `您已经加入${$[1]}`,
		'2009': `群邀请已发送`,
		'2010': `这个群不存在`,
		'2011': `忽略群邀请`,

		'3000': `参数不正确无法创建账单`,
		'3001': `付款金额与消费金额不等，无法创建账单`,
		'3002': `用户${$[1]}不是群成员，无法创建账单`,
		'3003': `账单创建成功`,
		'3004': `没有权限查看该账单`,
		'3005': `账单废弃成功`,
		'3006': `不能重复废弃账单`,

		'4000': `参数不正确无法查找用户`,
		'4001': `用户信息已更新`,
		'4002': `请输入用户真实姓名`,
		'4003': `无法一次查询1000名以上的用户`,
		'4004': `还能创建${$[1]}个邀请码`,
		'4005': `您输入的邀请码不正确`,
		'4006': `您输入的邀请码已被使用`,
		'4007': `邀请注册成功，请输入手机验证码登录`,
		'4008': `没有这个手机号码，请尝试注册`,
		'4009': `请输入手机号`,
		'4010': `非手机号登录模式`,
		'4011': `验证码已发送，${$[1]}秒后可以重新发送`,
		'4012': `${$[1]}秒后才能重新发送验证码`,
		'4013': `新用户注册请输入邀请码`,
		'4014': `请输入短信验证码`,
		'4015': `没有这个手机号`,
		'4016': `短信验证码不正确`,
		'4017': `登录成功`,
		'4018': `短信验证码过期`,
		'4019': `请输入邀请码`,
		'4020': `您无需邀请码，请直接登录`,
		'4021': `邀请码无效`,
		'4022': `无效的手机号`,
		'4023': `注册成功`,
	};

	return msg[$[0]];
}
