/*
 * 由setTimeout()调用的代码运行在与所在函数完全分离的执行环境上。
 * 这会导致，这些代码中包含的 this 关键字在非严格模式会指向 window (或全局)对象，严格模式下为 undefined，这和所期望的this的值是不一样的。
 */

export default function () {
  setTimeout("console.log(1+1)", 1e3);

  setTimeout(fn, 1e3, 1, "param");

  setTimeout(() => {
    console.log("this", this);
  }, 0);

  let myArray = ["zero", "one", "two"];
  myArray.myMethod = function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
  };

  myArray.myMethod(); // prints "[zero,one,two, myMethod: ƒ]"
  myArray.myMethod(1); // prints "one"

  setTimeout(myArray.myMethod, 1.0 * 1000);
  setTimeout(myArray.myMethod, 1.5 * 1000, "1");

  setTimeout(() => {
    myArray.myMethod();
  }, 1.0 * 1000);

  setTimeout(() => {
    myArray.myMethod(1);
  }, 1.5 * 1000);
}

function fn(...args) {
  console.log(args);
}

// (function (f) {
//   window.setTimeout = f(window.setTimeout);
//   window.setInterval = f(window.setInterval);
// })(function (f) {
//   return function (c, t) {
//     var a = [].slice.call(arguments, 2);
//     return f(function () {
//       c instanceof Function ? c.apply(this, a) : eval(c);
//     }, t);
//   };
// });
