const palindromes = function (string) {
  let reverseStr = "";
  let newStr = "";
  let reverseStrLower = "";
  let newStrLower = "";

  for (let i = string.length - 1; i >= 0; i--) {
    if (
      string[i] != " " &&
      string[i] != "!" &&
      string[i] != "," &&
      string[i] != "."
    ) {
      reverseStr += string[i];
    }
    reverseStrLower = reverseStr.toLowerCase();
  }

  for (let i = 0; i <= string.length - 1; i++) {
    if (
      string[i] != " " &&
      string[i] != "!" &&
      string[i] != "," &&
      string[i] != "."
    ) {
      newStr += string[i];
    }
    newStrLower = newStr.toLowerCase();
  }

  if (newStrLower === reverseStrLower) {
    return true;
  } else {
    return false;
  }
};
palindromes("raceCAr a");
// Do not edit below this line
module.exports = palindromes;
