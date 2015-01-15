var request = require('request');

var req = request.post('http://localhost:8000/')
			.on('error', function(err) {
				console.log(err);
			});

process.stdin.pipe(req).pipe(process.stdout);