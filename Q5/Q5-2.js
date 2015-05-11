var fs = require("fs"),
	path = require("path"),
	dir = process.argv[2],
	ext = "." + process.argv[3];

fs.readdir(dir, function(err, data) {
	if(!err) {	
		// loop files
		data.forEach(function(value) {			
			// get extension and match it to the given argument
			var extension = path.extname(value);
			if(extension === ext) {
				console.log(value);
			}

		});
	}
});