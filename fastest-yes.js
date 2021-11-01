// 2.36GiB/s

// node first.js | pv > /dev/null

const os = require('os');
const { Readable } = require('stream');

const fs = require('fs');

//https://github.com/schahriar/fast-yes/blob/master/yes.js
class YesStream extends Readable {
    constructor() {
      super();
  
      this._buffer = Buffer.alloc(16384, 'yes\n');
    }
  
    _read(size) {
      this.push(this._buffer);
    }
  }


const yes1 = new YesStream('yes');
yes1.pipe(process.stdout);

// 16384 is default
// large buffer is used
// const buffer = Buffer.alloc(65536, 'yes\n');

// function write() {
//     fs.write(process.stdout.fd, buffer, write);
// }

// for (let i = 0; i <= 1; i++) {
//     fs.write(process.stdout.fd, buffer, write);
// }
