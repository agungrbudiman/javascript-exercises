const fibonacci = function(number) {
    number = parseInt(number);
    if (number < 0) return 'OOPS';
    fibSequence = Array(number);
    for (let i = 0; i < fibSequence.length; i++) {
        if (i <= 1) {
            fibSequence[i] = 1;
        }
        else {
            fibSequence[i] = fibSequence[i-1] + fibSequence[i-2];
        }
    }
    return fibSequence[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
