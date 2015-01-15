var cp = require('child_process');
var duplex = require('duplexer');

module.exports = function (cmd, args) {
	var proc = cp.spawn(cmd, args);
	return duplex(proc.stdin, proc.stdout);
};