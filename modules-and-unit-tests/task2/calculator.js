export const getSquaredArray = (arr) => arr.map((element) => element ** 2);

export const getOddNumbers = (arr) =>
  arr.filter((element) => element % 2 === 1);

export default (first, second) => first + second;
