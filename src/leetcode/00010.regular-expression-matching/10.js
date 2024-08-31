/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const reg = new RegExp(`^${p}$`);
  return reg.test(s);
};

console.log(isMatch('aa', 'a'));
console.log(isMatch('aa', 'a*'));
console.log(isMatch('ab', '.*'));
