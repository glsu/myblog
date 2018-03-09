/*
* @Author: Promise
* @Date:   2018-03-09 09:58:49
* @Last Modified by:   Promise
* @Last Modified time: 2018-03-09 13:36:16
*/
module.exports = function (app) {
	app.get('/', function (req, res) {
		res.redirect('/post');
	});
	app.use('/signup', require('./signup'));
	app.use('/signin', require('./signin'));
	app.use('/signout', require('./signout'));
	app.use('/posts', require('./posts'));
	app.use('/comments', require('./comments'));
}