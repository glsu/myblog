/*
* @Author: Promise
* @Date:   2018-03-09 13:37:06
* @Last Modified by:   Promise
* @Last Modified time: 2018-03-09 14:07:20
*/
const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;

//GET /signout 退出
router.get('/', checkLogin, function (req, res, next) {
	res.send('退出');
});

module.exports = router;