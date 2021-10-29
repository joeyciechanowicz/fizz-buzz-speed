// 4.12MiB/s

// node first.js | pv > /dev/null

const os = require('os');
const { Readable } = require('stream');

const fizz = 'Fizz'; // 4
const buzz = 'Buzz'; //4
const fizzbuzz = 'FizzBuzz'; //8

class FizzBuzzStream extends Readable {
    constructor() {
        super();

        this.i = 0;
    }

    // allocateBuffer(bufferSize) {
    //     this._cachedAllocations.set(bufferSize, Buffer.alloc(bufferSize, `${this._repeat}${os.EOL}`));
    // }

    _read(size) {
        // const bufferSize = (size % 2 && (this._repeat.length % 2)) ? size - 1 : size;
        const buffer = Buffer.allocUnsafe(size);
        


        this.push('asd');
    }
}

const yes = new FizzBuzzStream();
yes.pipe(process.stdout);




