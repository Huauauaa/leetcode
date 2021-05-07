// 7. 实现一个sum方法，使sum(x)(y)(z)(...)(a)和sum(x,y,z,... a)返回的结果相同
// if (args.length > 1) {
// return args.reduce((res, cur) => res + cur, 0);
// }
// const x = args[0];
// return function(y) {
// return function(z) {
// return x + y + z;
// };
// };

// sum(1)(2)(3) // 6
// sum(1, 2, 3) // 6

export const sum = (...x) => {
  let result = x.reduce((a, b) => a + b);
  const add = (...y) => {
    if (y.length === 0) {
      return result;
    }
    result += y.reduce((a, b) => a + b);
    return add;
  };

  return add;
};
