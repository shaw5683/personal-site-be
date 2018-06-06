const query = require('./index');

const queryUser = (byId, param) => {
	return query(`select * from user where ${byId ? 'id' : 'username'} = '${param}' limit 1`);
}

module.exports = queryUser;
