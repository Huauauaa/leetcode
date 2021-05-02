const p = new Promise((resolve, reject) => {
  console.log(11);
  setTimeout(() => {
    // resolve(222);
    // throw "22";
    reject(222);
  }, 1e3);

  console.log(333);
});

p.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.warn(reason);
  }
).catch((err) => {
  console.error(err);
});

p.then(
  (value) => {
    console.log(`%c${value}`, "color: red;");
  },
  (reason) => {
    console.error(`%c${reason}`, "color: red");
  }
);
