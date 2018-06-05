const addUser = require('../sql/addUser');

const login = (req, res) => {
	res.send('login');
	res.end();
};

module.exports = login;