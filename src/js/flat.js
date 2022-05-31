function _flat(arr) {
  const result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }

  return result;
}

function flat(arr, depth = 1) {
  let result = [...arr];

  let count = depth;

  while (count > 0) {
    result = _flat(result);
    count -= 1;
  }

  return result;
}

function flatDeep(arr, result) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = [...result, ...flatDeep(item, [])];
    } else {
      result.push(item);
    }
  });

  return result;
}

let a = [[1, 2, [3]], [], [3, [4]]];

const flatArr = flat(a, 10);
console.log(flatArr);

const res = flatDeep(a, []);
console.log(res);
