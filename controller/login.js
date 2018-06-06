const queryUser = require('../sql/queryUser');
const crypto = require('crypto');

const login = async (req, res) => {
	let params = req.body;
	let obj = {
		success: false,
		msg: ''
	};
	if (params.username && params.password) {
		await queryUser(false, req.body.username).then(result => {
			let inputPwd = crypto.createHash('sha256').update(params.password).digest('hex');
			if (inputPwd === result[0].password) {
				obj.success = true;
				obj.msg = '登录成功';
			} else {
				obj.msg = '用户名或密码错误';
			}
		})
	} else {
		obj.msg = '请输入用户名或密码'
	}
	res.send(obj);
	res.end();
};

module.exports = login;