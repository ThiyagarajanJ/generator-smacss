module.exports = function(app) {
	var user = require('./app/controllers/userController');	
	
	app.get('/', function(req, res, next) {
		return res.send("WELCOME TO REST API");
	});

	app.post('/createUser', user.createUser); 
};