var split = require('split');
var through = require('through');

var tr = through(write, end);
var line = 0;


process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);


function write (buf) { 
	line++;

	if (line % 2 === 0) {
		this.queue(buf.toString().toUpperCase() + '\n');
	}
	else {
		this.queue(buf.toString().toLowerCase() + '\n');
	}
}

function end () { 
	this.queue(null);
}