// 40.0MiB/s

// node first.js | pv > /dev/null

const os = require('os');
const { Readable } = require('stream');

function getStr(o) {
    return `${o + 1}\n${o + 2}\nFizz\n${o + 4}\nBuzz\nFizz\n${o + 7}\n${o + 8}\nFizz\nBuzz\n${o + 11}\nFizz\n${o + 13}\n${o + 14}\nFizzBuzz\n`;
}

function numChars(numDigits) {
    return 47 + (8 * numDigits);
}

class FizzBuzzStream extends Readable {
    constructor() {
        super();

        this.iteration = 0;
    }

    _read(size) {
        // generally size == 16384

        this.push(getStr(this.iteration++ * 15));
    }
}

const stream = new FizzBuzzStream();
stream.pipe(process.stdout);




