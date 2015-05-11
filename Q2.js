var i = 2,
	len = process.argv.length,
	sum = 0;

for(i; i<len; i++) {
	sum+= Number(process.argv[i]);
}

console.log(sum);