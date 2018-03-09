/*
* @Author: Promise
* @Date:   2018-03-09 13:37:21
* @Last Modified by:   Promise
* @Last Modified time: 2018-03-09 13:56:41
*/
const express = require('express'); 
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;

//POST /comments 创建一条留言
router.post('/', checkLogin, function (req, res, next) {
	res.send('创建留言');
});

//GET /comments/:commentId/remove 删除一条留言
router.get('/commentId/remove', checkLogin, function (req, res, next) {
	res.send('删除留言');
});

module.exports = router;
