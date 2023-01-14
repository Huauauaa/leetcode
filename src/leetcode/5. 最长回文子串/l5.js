var longestPalindrome = function (s) {
  const n = s.length;
  if (n < 2) {
    return s;
  }
  let max = 0;
  let res = '';

  for (let i = 0; i < n; i++) {
    if (n - i <= max) {
      break;
    }
    for (let j = n - 1; j >= i; j--) {
      if (j - i + 1 <= max) {
        break;
      }

      const current = s.slice(i, j + 1);
      if (isValid(current)) {
        res = current;
        max = Math.max(max, j - i + 1);
      }
    }
  }
  return res;
};

function isValid(str) {
  const arr = str.split('');

  while (arr.length >= 2 && arr[0] === arr[arr.length - 1]) {
    arr.shift();
    arr.pop();
  }

  const result = arr.length < 2;

  return result;
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('c'));
console.log(longestPalindrome('ac'));
// console.log(isValid(['b', 'b']));
// console.log(isValid(['b']));
// console.log(isValid(['b', 'a', 'b']));
// console.log(isValid(['b', 'a', 'c', 'b']));
// //
