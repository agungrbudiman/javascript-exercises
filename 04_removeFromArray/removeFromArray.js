const removeFromArray = function(items, ...values) {
    let result = [];
    for (const item of items) {
        let count = 0;
        for (const value of values) {
            if (item !== value) {
                count += 1;
            }
        }
        if (count == values.length) {
            result.push(item);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
