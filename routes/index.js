const express = require('express');
const router = express.Router();

const login = require('../controller/login');

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Express' });
});

router.get('/login', login);

module.exports = router;
