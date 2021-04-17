/**
 *
 * @param [start=0] (number): The start of the range.
 * @param end (number): The end of the range.
 * @param [step=1] (number): The value to increment or decrement by.
 * @returns (Array): Returns the range of numbers.
 */
export default function range() {
  let start = 0;
  let end = 0;
  let step = 1;
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      end = arguments[0];
      break;
    default:
      start = arguments[0];
      end = arguments[1];
      step = arguments[2] ?? 1;
  }

  if (step === 0) {
    return new Array(Math.abs(start - end)).fill(start);
  }

  step = (start > end ? -1 : 1) * Math.abs(step);

  const result = [];
  while (start !== end) {
    result.push(start);
    start += step;
  }
  return result;
}
