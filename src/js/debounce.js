/**
 * arrow function
 * @param {*} fn
 * @param {*} wait
 * @returns
 */
export const debounce2 = (fn, wait) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => fn(...args), wait);
  };
};

/**
 * @param {*} fn
 * @param {*} wait
 * @returns
 */
export function debounce0(fn, wait) {
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

/**
 * immediate arrow function
 * @param {*} fn
 * @param {*} wait
 * @returns
 */
export const debounce3 = (fn, wait) => {
  let timer = null;

  return (...args) => {
    let now = !timer;
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      timer = null;
    }, wait);

    if (now) {
      fn(...args);
    }
  };
};

/**
 * immediate
 * @param {*} fn
 * @param {*} wait
 * @returns
 */
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

/*
import { debounce2, debounce0, debounce3 } from "./js/debounce";

const input = document.createElement("input");

document.body.appendChild(input);

input.addEventListener(
  "input",
  debounce3((e) => {
    console.log(e.target.value);
  }, 1e3)
);
*/
