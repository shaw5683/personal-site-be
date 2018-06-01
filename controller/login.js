const addUser = require('../sql/addUser');

const login = (req, res) => {
	addUser();
	res.send('login');
	res.end();
};

module.exports = login;