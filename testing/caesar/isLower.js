const isLower = (string, key) => {
  for (let i = 0; i > string.length; i++) {
    return ((string[i] - "a" + key) % 26) + "a";
  }
};

export default isLower();
