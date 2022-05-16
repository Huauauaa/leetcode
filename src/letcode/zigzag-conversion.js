/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows <= 1) {
    return s;
  }
  const arrs = new Array(numRows).fill("");
  let index = 0;
  let arrIndex = 0;
  let direction = true;
  while (index < s.length) {
    arrs[arrIndex] = arrs[arrIndex] + s.charAt(index);
    index += 1;

    if (direction) {
      arrIndex += 1;
    } else {
      arrIndex -= 1;
    }

    if (arrIndex === numRows || arrIndex === -1) {
      direction = !direction;
      if (direction) {
        arrIndex += 2;
      } else {
        arrIndex -= 2;
      }
    }
  }

  return arrs.join("");
};

const s = "PAYPALISHIRING";
const numRows = 3;

let result = convert(s, numRows);

console.log({ result });
