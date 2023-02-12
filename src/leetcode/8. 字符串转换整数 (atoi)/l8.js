/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let str = s.trim();
  let sign;
  if (str[0] === '-') {
    str = str.slice(1);
    sign = -1;
  } else if (str[0] === '+') {
    str = str.slice(1);
    sign = 1;
  } else {
    sign = 1;
  }
  let i = 0;
  let hasDot = false;
  while (i < str.length) {
    if (/\d/.test(str[i])) {
      i++;
    } else if (!hasDot && str[i] === '.') {
      i++;
      hasDot = true;
    } else {
      break;
    }
  }
  const result = sign * Number(str.slice(0, i));
  const max = Math.pow(2, 31);
  if (result < -max) {
    return -max;
  } else if (result > max - 1) {
    return max - 1;
  }
  return result;
};

console.log(myAtoi('0.12'));
console.log(myAtoi('  12'));
console.log(myAtoi('  -12'));
console.log(myAtoi('  12aa'));
console.log(myAtoi('  12.12aa'));
console.log(myAtoi('  12.12aa  '));
console.log(myAtoi('  -12.12aa  '));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'), -Math.pow(2, 31));
console.log(myAtoi('+-12'));
