const express = require('express');
const router = express.Router();

const login = require('../controller/login');
const register = require('../controller/register');
const checkRepeat = require('../controller/checkRepeat');

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Express' });
});

router.post('/login', login);

router.post('/register', register);

router.get('/checkRepeat', checkRepeat);

module.exports = router;
