var mongoose = require('mongoose');

var geekSchema = mongoose.Schema({
	name: String
});

module.exports = mongoose.model('Geek', geekSchema);