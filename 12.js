 var duplexer = require('duplexer');
    var through = require('through');
    
    module.exports = function (counter) {
        var countries = {};

        var s = through(write, end);
        return duplexer(s, counter);
        
        function write (buf) {
            countries[buf.country] = (countries[buf.country] || 0) + 1;
        }
        function end () { 
        	counter.setCounts(countries);
        }
    };