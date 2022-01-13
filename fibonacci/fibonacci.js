const fibonacci = function (number) {
  let fibArray = [0, 1];

  if (number >= 1) {
    for (let i = 2; i <= number; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray[number];
  } else {
    return "OOPS";
  }
};
// Do not edit below this line
module.exports = fibonacci;
