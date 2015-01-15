var http = require('http');
var through = require('through');


var server = http.createServer(function (req, res) {
	if (req.method === 'POST') {
		var tr = through(write,end);
		return req.pipe(tr).pipe(res);
	}
	res.end('not a POST?\n');
});

server.listen(process.argv[2]);

   
function write (buf) { this.queue(buf.toString().toUpperCase()); }
function end () { this.queue(null);}