import call from "./call";

export default function (fn, obj, ...args) {
  return function (...args1) {
    return call(fn, obj, ...args, ...args1);
  };
}
