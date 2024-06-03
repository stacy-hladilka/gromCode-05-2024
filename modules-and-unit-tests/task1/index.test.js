const getEvenNumbers = (arr) => {
  return arr.filter((element) => element % 2 === 0);
};

it("should get only EVEN numbers", () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(result).toEqual([2, 4, 6, 8]);
});

it("17 is equal to 17", () => {
  expect(17).toEqual(17);
});

it("18 is NOT equal to 17", () => {
  expect(18).not.toEqual(17);
});
