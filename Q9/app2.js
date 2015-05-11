var http = require("http"),
	data = [],
	counter = 0;

for(var i = 0; i<3; i++) {
	getHttp(i);
}

function showResults() {
	data.forEach(function(value) {
		console.log(value);
	});
}

function getHttp(index) {	

	http.get(process.argv[2 + index], function(response) {		
		response.setEncoding('utf8');

		var output = "";
		response.on("data", function(data) {
			output += data;			
		});	

		response.on("end", function() {	
			data[index] = output;
			counter++;

			if(counter === 3) {
				showResults();
			}			
		});
	});
}