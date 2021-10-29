// 4.12MiB/s

// node first.js | pv > /dev/null

for (let i = 0; i < 100000000; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        process.stdout.write("FizzBuzz\n");
    } else if (i % 3 == 0) {
        process.stdout.write("Fizz\n");
    } else if (i % 5 == 0) {
        process.stdout.write("Buzz\n");
    } else {
        process.stdout.write(i.toString() + '\n');
    }
    i++;
}
