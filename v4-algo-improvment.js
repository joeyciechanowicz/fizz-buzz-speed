// 61.7MiB/s

// node first.js | pv > /dev/null

// l = 0 -- 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 
// l = 1, o = l * 15, (o + 1, 15 + 2, Fizz, o + 4, Buzz, Fizz, o + 7, o + 8, Fizz, Buzz, o + 11, Fizz, o + 13, o + 14, FizzBuzz, 


// o = l * 15, 15 + 1, 15 + 2, Fizz, 15 + 4, Buzz, Fizz, 15 + 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 
// for l = 0 -> inf

const getStr = o => `${o + 1}\n${o + 2}\nFizz\n${o + 4}\nBuzz\nFizz\n${o + 7}\n${o + 8}\nFizz\nBuzz\n${o + 11}\nFizz\n${o + 13}\n${o + 14}\nFizzBuzz\n`

for (let l = 0; l < 10000000; l++) {
    process.stdout.write(getStr(l * 15));
}
