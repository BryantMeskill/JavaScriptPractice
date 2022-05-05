import isLower from "./isLower";
import isUpper from "./isUpper";
debugger;
const caesar = (string, key) => {
  //is lowercase
  if (string[i] >= "a" && string[i] <= "z") {
    for (let i = 0; i > string.length; i++) {
      return ((string[i] - "a" + key) % 26) + "a";
    }
    //is uppercase
  } else {
    return ((string[i] - "A" + key) % 26) + "A";
  }
};

module.exports(caesar);
