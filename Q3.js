var fs = require("fs"),
	file = process.argv[2],
	numLines = fs.readFileSync(file).toString().split('\n').length-1;

console.log(numLines);