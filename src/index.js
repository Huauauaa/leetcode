import Promise, { Demo } from "./mine/Promise";

const p = new Promise((resolve, reject) => {
  reject(1);
});

console.log(p);
