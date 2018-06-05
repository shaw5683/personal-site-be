const query = require('./index');

module.exports = params => {
	return query(`insert into user(id, username, password, sex, phone, email) values('${params.id}', '${params.username}', '${params.password}', '${params.sex}', '${params.phoneNumber}', '${params.email}')`);
};