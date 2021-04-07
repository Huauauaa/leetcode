export default function debounce0(fn, wait) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

export default function debounce(fn, wait) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    let now = !timer;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
    }, wait);

    if (now) {
      fn.apply(context, args);
    }
  };
}
