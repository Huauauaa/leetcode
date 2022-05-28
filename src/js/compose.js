// function compose(...fns) {
// TODO
// }
// compose(f,g)(x) === f(g(x))
// compose(f,g,m)(x) === f(g(m(x)))
// compose(f,g,m)(x) === f(g(m(x)))
// compose(f,g,m,n)(x) === f(g(m(n(x))))
//···

function compose(...fns) {
  return (args) => {
    return fns.reverse().reduce((res, cur) => {
      return cur(res);
    }, args);
  };
}

const fn1 = (a) => {
  return a.toUpperCase();
};

const fn2 = (a) => {
  return a.slice(2);
};

let a = "abcd";
a = fn1(a);
a = fn2(a);

console.log(a);

const res = compose(fn1, fn2)(a);

console.log(res);
