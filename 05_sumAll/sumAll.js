const sumAll = function(number1, number2) {
    let sum = 0;
    if (number1 < 0 || number2 < 0) {
        return 'ERROR';
    }
    if (typeof number1 != 'number' || typeof number2 != 'number') {
        return 'ERROR';
    }
    // make sure number1 is always smaller than number2, if not swap them
    if (number1 > number2) {
        number1 += number2;
        number2 = number1 - number2;
        number1 -= number2;
    }
    for (let i = number1; i <= number2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
