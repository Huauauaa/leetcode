/**
 *
 * @param {*} array
 * @param {*} size
 * @returns
 */
export default function chunk(array, size) {
  const result = [];
  let count = 0;
  let length = array.length;

  while (count < length) {
    result.push(array.slice(count, count + size));
    count += size;
  }
  return result;
}
