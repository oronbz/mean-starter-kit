var mongoose = require('mongoose');

var geekSchema = new mongoose.Schema({
	name: String
});

exports = mongoose.model('Geek', geekSchema);