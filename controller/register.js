const crypto = require('crypto');
const uuid = require('uuid/v1');
const addUser = require('../sql/addUser');
const checkRepeat = require('../sql/checkNameRepeat');

const register = async (req, res) => {
	let msg = '';
	let params = req.body;
	let obj = {};
	if (!params.username) {
		msg = '请输入用户名';
	} else if (!/^[a-zA-Z][A-Za-z0-9_]{5,19}$/.test(params.username)) {
		msg = '用户名格式不正确';
	} else if (params.password.length < 8 || params.password.length > 20) {
		msg = '密码长度不正确';
	} else if (params.password !== params.passwordConfirm) {
		msg = '请重新确认密码';
	} else if (!['男', '女'].includes(params.sex)) {
		msg = '请选择性别';
	} else if (params.phoneNumber && !/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(params.phoneNumber + '')) {
		msg = '手机号码不正确';
	} else if (params.email && !/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(params.email)) {
		msg = 'Email格式不正确';
	}

	await checkRepeat(params.username).then((result, fields) => {
		if (result.length !== 0) {
			msg = '用户名已存在'
		}
	});

	if (msg === '') {
		params.id = uuid().replace(/-/g, '');
		params.password = crypto.createHash('sha256').update(params.password).digest('hex');
		await addUser(params).then((result, fields) => {
			obj.data = {
				id: params.id
			};
		})
	}

	obj.success = !Boolean(msg);
	obj.msg = msg || '注册成功';
	res.send(obj);
	res.end();
};

module.exports = register;