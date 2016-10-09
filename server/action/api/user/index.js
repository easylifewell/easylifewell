var mongoose = require('mongoose');

module.exports = function(req, res){

    var kittySchema = mongoose.Schema({
	    name: String
	})

	var Kitten = mongoose.model('Kitten', kittySchema)

	var silence = new Kitten({ name: 'Silence' })
	console.log(silence.name)
	res.send(silence.name);
};