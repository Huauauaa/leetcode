/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const chars = s.split('');
  const len = s.length;
  const dp = Array.from({ length: numRows }, () =>
    Array.from({ length: len }).fill(''),
  );
  let i = 0;
  let iSign = 1;
  let j = 0;
  let jSign = 0;
  while (chars.length > 0) {
    dp[i][j] = chars.shift();
    i += iSign;
    j += jSign;

    if (i === numRows - 1) {
      iSign = -1;
      jSign = 1;
    } else if (i === 0) {
      iSign = 1;
      jSign = 0;
    }
  }

  return dp.reduce((res, cur) => res + cur.join(''), '');
};

// console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR');
// console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI');
// console.log(convert('A', 1) === 'A');
console.log(convert('AB', 1));
