const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let output = '';
    for (let index = 0; index < num; index++) {
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
