const check = require('../sql/checkNameRepeat');

const checkRepeat = (req, res) => {
	let name = req.query.username;
	check(name).then((result) => {
		let repeat = false;
		if (result.length !== 0) {
			repeat = true;
		}
		res.send({
			success: true,
			repeat
		});
		res.end();
	});
};

module.exports = checkRepeat;