function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return NaN;
    }

    if ((input % 3 == 0) && (input % 5 == 0)) {
        return 'fizzbuzz';
    }

    if (input % 3 == 0) {
        return 'fizz';
    }

    if (input % 5 == 0) {
        return 'buzz';
    }

    else {
        return input;
    }
}

module.exports.fizzBuzz = fizzBuzz;