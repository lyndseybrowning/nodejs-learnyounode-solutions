var http = require("http"),
	path = process.argv[2],
	numChars = 0,
	allChars = "";

http.get(path, function(response) {
	response.setEncoding('utf8')
	response.on("data", function(data) {		
		numChars += data.length;
		allChars += data;
	});
	response.on("end", function() {
		console.log(numChars);
		console.log(allChars);
	});	
});