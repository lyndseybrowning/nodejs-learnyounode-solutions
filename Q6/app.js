var fs = require("./module.js"),
	directory = process.argv[2],
	extension = process.argv[3];

fs(directory, extension, function(err, data) {
	if(!err) {
		data.forEach(function(value) {
			console.log(value);
		});
	}
});