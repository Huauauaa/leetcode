/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const path = [];
  let i = 0;
  let max = -Infinity;

  while (i < s.length) {
    while (path.includes(s[i])) {
      max = Math.max(max, path.length);
      path.splice(0, 1);
    }
    path.push(s[i]);
    i++;
  }
  return Math.max(max, path.length);
};
console.log(lengthOfLongestSubstring('abcabcbb'));
// abcabcbb
// a
// ab
// abc
// abca bca
//bcab cab
// cabc abc
// abcb cb
