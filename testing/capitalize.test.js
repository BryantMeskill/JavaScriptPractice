import getUpper from "./capitalize";

test("capitalizes the first letter of the string", () => {
  expect(getUpper("hello")).toBe("Hello");
});
