/*
* @Author: Promise
* @Date:   2018-03-09 13:36:59
* @Last Modified by:   Promise
* @Last Modified time: 2018-03-09 14:00:39
*/
const express = require('express');
const router = express.Router();
const checkNotLogin = require('../middlewares/check').checkNotLogin;

//GET /signin 登录页
router.get('/', checkNotLogin, function (req, res, next) {
	res.send('登录页');
});

//POST /signin 用户登录
router.post('/', checkNotLogin, function (req, res, next) {
	res.send('登录');
});

module.exports = router;