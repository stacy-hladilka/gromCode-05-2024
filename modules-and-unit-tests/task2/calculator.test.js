import { getSquaredArray } from "./calculator";
import { getOddNumbers } from "./calculator";
import getSum from "./calculator";

it("should get squared numbers", () => {
  const result = getSquaredArray([1, 2, 3, 4]);
  expect(result).toEqual([1, 4, 9, 16]);
});

it("should get only odd numbers", () => {
  const result = getOddNumbers([1, 2, 3, 4]);
  expect(result).toEqual([1, 3]);
});

it("should get sum", () => {
  const result = getSum(1, 2);
  expect(result).toEqual(3);
});
