/*
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * 滑动窗口
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let win = [];
  const map = new Map();
  let maxLen = 0;
  for (let i = 0, l = s.length; i < l; i += 1) {
    const ch = s[i];

    if (map.has(ch) && win.includes(ch)) {
      win = s.slice(map.get(ch) + 1, i).split("");
    }
    map.set(ch, i);
    win.push(ch);

    if (win.length > maxLen) {
      maxLen = win.length;
    }
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb") === 3);
//abcabcbb
//---
//   -
//    -
//     -
//      _
console.log(lengthOfLongestSubstring("bbbbb") === 1);
//bbbbb
//-
// -
//  -
//   -
//    -
console.log(lengthOfLongestSubstring("pwwkew") === 3);
//pwwkew
//--
//  ---
//     -
console.log(lengthOfLongestSubstring("dvdf") === 3);
//dvdf
//__
// ___

console.log(lengthOfLongestSubstring("tmmzuxt") === 5);
