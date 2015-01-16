var through = require('through');
var tr = require('trumpet')();
var tu = through(write, end);


tr.pipe(process.stdout);

var stream = tr.createStream('.loud');
stream.pipe(tu).pipe(stream);

process.stdin.pipe(tr);


function write (buf) { 
	this.queue(buf.toString().toUpperCase());
}

function end () { 
	this.queue(null);
}