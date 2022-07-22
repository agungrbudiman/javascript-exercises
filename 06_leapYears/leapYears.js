const leapYears = function(years) {
    if ((years % 4 == 0) && (years % 100 != 0)) {
        return true;
    }
    if ((years % 100 == 0) && (years % 400 == 0)) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
