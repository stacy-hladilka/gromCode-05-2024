import { calc } from "./calculator";

it("should accomplish subtraction", () => {
  const result = calc("4 - 1");
  expect(result).toEqual("4 - 1 = 3");
});

it("should accomplish addition", () => {
  const result = calc("4 + 1");
  expect(result).toEqual("4 + 1 = 5");
});

it("should accomplish multiplication", () => {
  const result = calc("4 * 2");
  expect(result).toEqual("4 * 2 = 8");
});

it("should accomplish division", () => {
  const result = calc("4 / 2");
  expect(result).toEqual("4 / 2 = 2");
});

it("should accomplish subtraction", () => {
  const result = calc(2886);
  expect(result).toEqual(null);
});
