const config = require('../conf/db');
const mysql = require('mysql');

const pool = mysql.createPool(config.mysql);

const query = queryStr => {
	return new Promise((resolve, reject) => {
		pool.query(queryStr, (err, res, fields) => {
			if (err) {
				reject(err);
			} else {
				resolve(res, fields);
			}
		});
	});
};

module.exports = query;