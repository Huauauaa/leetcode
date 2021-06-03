import random from "../util/random";

export default function (size = 1, min = 0, max = 2) {
  const map = new Map();
  while (map.size !== size) {
    const n = random(min, max);
    if (!map.has(n)) {
      map.set(n, n);
    }
  }
  return [...map.keys()];
}
