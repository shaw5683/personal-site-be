const query = require('./index');

module.exports = name => {
	return query(`select * from user where username = '${name}' limit 1`);
};