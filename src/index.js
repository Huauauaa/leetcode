import { sum } from "./tencent/curry";

// var res1 = sum(1)(2)(3)(4)(5)(6);
// console.log(res1.toString()); //21
// var res2 = sum(1, 2, 3, 4, 5, 6);
// console.log(res2.toString()); //21

console.log(sum(1, 2, 3, 4)()); // 10
console.log(sum(1)(2)(3)(4)());
console.log(sum(1, 2)(3)(4)());
console.log(sum(1)(2, 3, 4)());
