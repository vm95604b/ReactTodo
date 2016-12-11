// Requires Express Lib and stores it in variable 'express'
var express = require('express');

// Create our app
var app = express();

// Constant port for Heroku/ 3000 becomes back up
const PORT = process.env.PORT || 3000;

// Redirects HTTPS traffic to HTTP
app.use(function (req, res, next) {
	// Only if its HTTPS do we want to redirect
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	}else {
		next();
	}
});

app.use(express.static('public'));


// Use enviornment variable with Heroku

app.listen(PORT, function() {

	console.log('Express server is up on port ' + PORT);

});