export default function call(fn, obj, ...args) {
  if (obj === undefined || obj === null) {
    obj = globalThis;
  }

  obj.__temp__ = fn;

  const result = obj.__temp__(...args);

  delete obj.__temp__;

  return result;
}
