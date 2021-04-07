/**
 * 辗转相除求最大公约数
 *
 * @param {*} a
 * @param {*} b
 */
const gdc = (a, b) => {
  while (a % b) {
    [a, b] = [b, a % b];
  }
  return b;
};

/**
 * 递归
 * @param {*} a
 * @param {*} b
 */
// const gdc = (a, b) => {
//   if (b === 0) {
//     return a
//   }
//   return gdc(b, a % b)
// }

console.log(gdc(6, 8));
