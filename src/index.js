import { flatten } from "./tencent/flatten";

const res = flatten([1, [2, [3, 4], 5], 6]);

console.log(res);
