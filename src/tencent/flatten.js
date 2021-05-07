/*
1.完成函数 flatten，接受数组作为参数，数组元素包含整数或数组，函数返回扁平化后的数组
console.log(flatten([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
*/

export const flatten = (arr) =>
  arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
