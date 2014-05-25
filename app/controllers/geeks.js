var Geek = require('../models/geek');

exports.list = function(req, res) {
	Geek.find(function(err, nerds) {
		if (err)
			res.send(err);

		res.json(nerds);
	});
};

exports.create = function(req, res) {
	var geek = new Geek(); // create a new instance of the Geek model
	geek.name = req.body.name; // set the geek name (comes from the request)

	// save the geek and check for errors
	geek.save(function(err) {
		if (err)
			res.send(err);

		res.json(201, {
			message: 'geek is created!'
		});
	});
};

exports.geekById = function(req, res) {
	Geek.findById(req.params.geek_id, function(err, geek) {
		if (err)
			res.send(err);

		res.json(geek);
	});
};

exports.update = function(req, res) {
	Geek.findById(req.params.geek_id, function(err, geek) {
		if (err)
			res.send(err);

		geek.name = req.body.name; // update the geek name

		geek.save(function(err) {
			if (err)
				res.send(err);

			res.json({
				message: 'geek updated!'
			});
		});
	});
};

exports.delete = function(req, res) {
	Geek.remove({
		_id: req.params.geek_id
	}, function(err, geek) {
		if (err)
			res.send(err);

		res.json({
			message: 'geek successfully deleted'
		});
	});
};