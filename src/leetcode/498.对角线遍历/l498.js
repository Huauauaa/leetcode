function findDiagonalOrder(mat) {
  const result = [];

  let i = 0;
  let j = 0;
  const x = mat[0].length;
  const y = mat.length;
  const n = y * x;

  let dir = 1;

  while (result.length < n) {
    if (mat[i] !== undefined && mat[i][j] !== undefined) {
      result.push(mat[i][j]);
    }
    if (i < 0 || i >= y) {
      j += 1;

      dir *= -1;
    }

    i += dir * -1;
    j += dir * 1;
  }

  return result;
}

let result = findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

console.log(result);

result = findDiagonalOrder([
  [1, 2],
  [3, 4],
]);

console.log(result);

result = findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
]);

console.log(result);
