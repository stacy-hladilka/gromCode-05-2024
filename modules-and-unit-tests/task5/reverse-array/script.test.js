import { reverseArray } from "./script";

it("should return null in case of non-array param", () => {
  const result = reverseArray("bubub");
  expect(result).toEqual(null);
});

it("should return reversed array", () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});

it("input array should not be changed", () => {
  const param = [1, 2, 3];
  reverseArray(param);
  expect(param).toEqual([1, 2, 3]);
});
