var fs = require("fs"),
	path = require("path");
	
module.exports = function(directory, extension, callback) {

	var extension = "." + extension,
		filters = [];

	fs.readdir(directory, function(err, data) {
		
		if(err) {	
			return callback(err);
		} 

		data.forEach(function(value) {							
			var currentExtension = path.extname(value);
			if(currentExtension === extension) {
				filters.push(value);
			}
		});

		callback(null, filters);		
	});	
};