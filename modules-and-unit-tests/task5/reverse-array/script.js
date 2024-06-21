export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    return [...arr].reverse();
  }
}



