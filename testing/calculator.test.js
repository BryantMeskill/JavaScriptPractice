import calculator from "./calculator";

test("Adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtracts 2 - 1 to equal 1", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("Divides 4 and 2 to equal 2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("Multiplies 4 and 2 to equal 8", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});
