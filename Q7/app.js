var http = require("http"),
	path = process.argv[2];

http.get(path, function(response) {
	response.on("data", function(data) {
		console.log(data.toString());
	});
});