/*
* @Author: Promise
* @Date:   2018-03-09 13:20:57
* @Last Modified by:   Promise
* @Last Modified time: 2018-03-09 14:25:16
*/
module.exports = {
	port: 3000,
	session: {
		secret: 'myblog',
		key: 'myblog',
		maxAge: 2592000000
	},
	mongodb: 'mongodb://localhost:27017/myblog'
}