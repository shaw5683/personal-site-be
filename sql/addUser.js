const query = require('./index');

module.exports = () => {
	query('insert into user(name, sex) values("shaw", "男")').catch(err => {
		console.log(err);
	});
};