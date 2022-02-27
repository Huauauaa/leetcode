function isEven(val) {
  return !(val & 1);
}

function isEven1(val) {
  return val % 2 === 0;
}

function duration(cb) {
  const start = window.performance.now();
  cb();
  const end = window.performance.now();
  console.log(end - start);
}

const range = 1e9;
test("isEven", () => {
  for (let i = 1; i < range; i++) {
    isEven(i);
  }
});
test("isEven1", () => {
  for (let i = 1; i < range; i++) {
    isEven1(i);
  }
});
