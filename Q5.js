var fs = require("fs"),
	i = 2;
	dir = process.argv[2],
	ext = process.argv[3];

fs.readdir(dir, function(err, data) {
	if(!err) {	
		// loop files
		data.forEach(function(value) {
			
			// get extension and match it to the given argument
			var extension = value.split(".")[1];
			if(extension === ext) {
				console.log(value);
			}

		});
	}
});