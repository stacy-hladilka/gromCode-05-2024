import getMinSquaredNum from "./getMinSquaredNumber";

it("should return null with empty array as param", () => {
  const result = getMinSquaredNum([]);
  expect(result).toEqual(null);
});

it("should return null with non-array as param", () => {
  const result = getMinSquaredNum("");
  expect(result).toEqual(null);
});

it("should return min squared number from input array", () => {
  const result = getMinSquaredNum([-2, 67, -50, 42, 28, -3]);
  expect(result).toEqual(4);
});
