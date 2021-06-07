export default function bubble(arr) {
  for (let i = 0, l = arr.length - 1; i < l; i++) {
    for (let j = 0, len = arr.length - 1 - i; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
