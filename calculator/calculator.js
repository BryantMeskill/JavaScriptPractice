const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = (a, b) => Math.pow(a, b);

const factorial = function (x) {
  if (x === 0) return 1;
  let sum = 1;
  for (let i = x; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
