export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  } else {
    return Math.min(...arr.map((element) => Math.abs(element))) ** 2;
  }
};
