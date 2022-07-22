const removeFromArray = function(items, ...values) {
    let result = [];
    for (const item of items) {
        for (const value of values) {
            if (item !== value) {
                result.push();
            }
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
