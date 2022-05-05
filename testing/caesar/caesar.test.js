import caesar from "./caesar";

test("Prints the cipher of 'hello' a key of 2 added to it, making it jgnnq", () => {
  expect(caesar("hello", 2)).toBe("jgnnq");
});
