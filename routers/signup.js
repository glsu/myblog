/*
* @Author: Promise
* @Date:   2018-03-09 13:36:52
* @Last Modified by:   Promise
* @Last Modified time: 2018-03-09 14:04:38
*/
const express = require('express');
const router = express.Router();
const checkNotLogin = require('../middlewares/check').checkNotLogin;

//GET /signup 注册页
router.post('/', checkNotLogin, function (req, res, next) {
	res.send('注册页');
});

//POST /signup 用户注册
router.post('/', checkNotLogin, function (req, res, next) {
	res.send('注册');
});

module.exports = router;
