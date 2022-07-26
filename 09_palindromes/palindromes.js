const palindromes = function (string) {
    const normalizedString = string.toLowerCase().replace(/[^a-z0-9]+/g, '');
    const reversedString = normalizedString.split('').reverse().join('');
    return normalizedString == reversedString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
