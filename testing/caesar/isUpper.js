const isUpper = (string, key) => {
  return ((string[i] - "A" + key) % 26) + "A";
};

export default isUpper;
