/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const res = Number(
    `${x >= 0 ? '' : '-'}${String(x >= 0 ? x : -x)
      .split('')
      .reverse()
      .join('')}`,
  );
  if (res < -(2 ** 31) || res > 2 ** 31 - 1) {
    return 0;
  }
  return res;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
