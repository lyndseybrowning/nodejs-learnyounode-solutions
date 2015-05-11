var fs = require("fs"),
	filename = process.argv[2],
	result = 0;

fs.readFile(filename, function(err, data) {
	if(!err) {
		result = data.toString().split('\n').length-1;
		console.log(result);
	}
});