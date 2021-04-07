export default function throttle0(fn, wait) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, wait);
    }
  };
}

export default function throttle(fn, wait) {
  let prev = 0;
  return function () {
    const context = this;
    const args = arguments;
    let now = Date.now();
    if (now - prev > wait) {
      fn.apply(context, args);
      prev = now;
    }
  };
}
