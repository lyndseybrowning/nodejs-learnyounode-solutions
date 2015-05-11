var http = require("http"),
	url1 = process.argv[2],
	url2 = process.argv[3],
	url3 = process.argv[4];

getHttp(url1, function(err, data) {
	if(!err) {
		console.log(data);
		getHttp(url2, function(err, data) {
			if(!err) {
				console.log(data);
				getHttp(url3, function(err, data) {
					console.log(data);
				});
			}
		});
	}
})

function getHttp(path, callback) {	

	http.get(path, function(response) {		
		response.setEncoding('utf8');

		var output = "";
		response.on("data", function(data) {
			output += data;
		});	

		response.on("end", function() {
			callback(null, output);
		});
	});
}