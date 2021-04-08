export function fib1(n) {
  const cache = {
    1: 1,
    2: 1
  };
  if (cache[n]) {
    return cache[n];
  }
  const result = fib1(n - 1) + fib1(n - 2);
  cache[n] = result;
  return result;
}
