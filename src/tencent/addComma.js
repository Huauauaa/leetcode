/*

2.实现一个格式化数字的函数 addComma，给数字添加千位分隔符
function addComma(num) {
// TODO
if (Number.isNaN(num)) {
return;
}
return num.toLocaleString();
}

expect(addComma(1234)).toBe('1,234');
// 你还会添加哪些测试用例

*/

function comma(str) {
  const result = [];
  const strs = str.split("");
  strs.forEach((item, index) => {
    result.push(item);
    if (index % 3 === 2 && index !== strs.length - 1) {
      result.push(",");
    }
  });
  return result.join("");
}
function addComma(num) {
  if (Number.isNaN(num)) {
    return;
  }
  const symbol = num > 0 ? "" : "-";
  if (num < 0) {
    num = -num;
  }
  const nums = num.toString().split(".");
  const intStr = nums[0];
  const floatStr = nums[1];
  let result = comma(intStr.split("").reverse().join(""))
    .split("")
    .reverse()
    .join("");
  if (floatStr) {
    result += `.${comma(floatStr)}`;
  }
  return `${symbol}${result}`;
}

console.log(addComma(1e1));
