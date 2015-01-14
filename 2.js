var fs = require('fs');

var stream = fs.createReadStream(process.argv[2]);

stream.on('error', function (err) {
	stream.pipe(process.stderr);
});

stream.pipe(process.stdout);