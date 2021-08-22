function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return NaN;
    }

    else {
        return x / y;
    }
}

module.exports.add = add;

module.exports.subtract = subtract;

module.exports.multiply = multiply;

module.exports.divide = divide;

