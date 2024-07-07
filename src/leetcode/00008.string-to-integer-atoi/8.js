/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const chars = s.split('');
  let path = '';
  let first = chars[0];
  while (first === ' ') {
    chars.shift();
    first = chars[0];
  }
  let sign = 1;
  if (first === '-') {
    chars.shift();
    sign = -1;
  } else if (first === '+') {
    chars.shift();
    sign = 1;
  }
  for (const char of chars) {
    if (/\d/.test(char)) {
      path += char;
    } else {
      break;
    }
  }
  if (path === '') {
    return 0;
  }
  const n = Number(`${sign === 1 ? '' : '-'}${path}`);
  if (n < -(2 ** 31)) {
    return -(2 ** 31);
  }
  if (n > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  }
  return n;
};

// const myAtoi2 = (s) => {
//   const n = Number.parseInt(s, 10) || 0;
//   if (n < -(2 ** 31)) {
//     return -(2 ** 31);
//   }

//   if (n > 2 ** 31 - 1) {
//     return 2 ** 31 - 1;
//   }

//   return n;
// };

console.log(myAtoi(''));
console.log(myAtoi('42'));
console.log(myAtoi(' -042'));
console.log(myAtoi('1337c0d3'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('   -042'));
console.log(myAtoi('-+12'));
console.log(myAtoi('+1'));
console.log(myAtoi('-91283472332'));
