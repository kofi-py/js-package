function primes(min, max) {
    min = parseInt(prompt('Enter lower number: '));
    max = parseInt(prompt('Enter higher number: '));

    console.log(`The prime numbers from ${min} and ${max} are:`);

    for (let i = min; i <= max; i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}

module.exports.primes = primes;