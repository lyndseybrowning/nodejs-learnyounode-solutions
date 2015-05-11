var net = require("net"),
	server = net.createServer(function(socket) {

		var d = new Date(),
		    days = d.getDate(),
		    month = d.getMonth()+1,
		    year = d.getFullYear(),
		    hours = d.getHours(),
		    minutes = d.getMinutes(),
		    dateFormat = year + "-" + leadingZero(month) + "-" + leadingZero(days);
		    dateFormat += " " + leadingZero(hours) + ":" + leadingZero(minutes);

		socket.write(dateFormat);
		socket.end();
	});
	
server.listen(process.argv[2]);

function leadingZero(item) {
    return (item !== '' && item < 10 && item[0] !== '0') ? '0'+ item : item;
} 