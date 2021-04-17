/**
 *
 * @param array (Array): The array to process.
 * @param [size=1] (number): The length of each chunk
 * @returns (Array): Returns the new array of chunks.
 */
export default function chunk(array, size = 1) {
  const result = [];
  let count = 0;
  let length = array.length;

  while (count < length) {
    result.push(array.slice(count, count + size));
    count += size;
  }
  return result;
}
