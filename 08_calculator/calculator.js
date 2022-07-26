const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(numbers) {
  return numbers.reduce((total, number) => {
    return total += number;
  }, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, number) => {
    return total *= number;
  }, 1)
};

const power = function(n1, n2) {
  let total = 1;
  for (let i = 0; i < n2; i++) {
    total *= n1;
  }
  return total;
};

const factorial = function(n1) {
  let total = 1;
  for (let i = 1; i <= n1; i++) {
    total *= i
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
