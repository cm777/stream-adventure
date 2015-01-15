var concat = require('concat-stream');


process.stdin
    .pipe(concat(buffered));

function buffered (data) {
    process.stdout.write(data.toString().split('').reverse().join('') + '\n');
}