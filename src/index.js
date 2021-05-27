import call from "./mine/call";
import apply from "./mine/apply";
import bind from "./mine/bind";

const add = function (a, b) {
  console.log(a, b, this);
  return a + b;
};

const obj = {
  name: "obj",
};

const param = [2, 4];

// const res = call(add, obj, ...param);
// const res4 = call(add, null, ...param);
// const res1 = apply(add, obj, param);

// console.log("res", res);
// console.log("res1", res1);
// console.log("res4", res4);
// console.log(bind(add, obj)(...param));
// console.log(bind(add, obj, 100));
console.log(bind(add, obj, 100)(...param));
console.log(obj);
