var express = require('express');

var geeks = require('./geeks')

module.exports = function(app) {
	geeks(app);

	app.all('/api/*', function(req, res) {
		res.send(404);
	});

	// required for html5mode
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};

