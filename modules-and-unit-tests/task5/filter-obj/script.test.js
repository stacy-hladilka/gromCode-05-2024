import { getAdults } from "./script";

it("should return empty obj in case of empty obj input", () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it("input obj should NOT be changed", () => {
  const input = { "John Doe": 19, Tom: 17, Bob: 18 };
  getAdults(input);
  expect(input).toEqual({ "John Doe": 19, Tom: 17, Bob: 18 });
});

it("should filter only >18 users", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ "John Doe": 19, Bob: 18 });
});
