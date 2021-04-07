var isPalindrome = function (x) {
  if (x < 0) return false;
  const numbers = [];
  let backup = x;
  let flag;
  while (backup) {
    flag = backup % 10;
    numbers.push(flag);
    backup = Math.floor(backup / 10);
  }
  return (
    numbers.reduce(
      (res, cur, i) => res + cur * 10 ** (numbers.length - i - 1),
      0
    ) === x
  );
};

console.log(isPalindrome(1001));
