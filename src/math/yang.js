export default function () {
  for (let i = 0; i < 10; i++) {
    let result = "";
    for (let j = 0; j <= i; j++) {
      result += `${getNum(i, j)}`.padEnd(4);
    }

    console.log(`${" ".repeat(10 - i)}${result}`);
  }
}

export function getNum(x, y) {
  if (x < y) {
    return null;
  }
  if (y === 0) {
    return 1;
  }
  if (x === y) {
    return 1;
  }

  return getNum(x - 1, y - 1) + getNum(x - 1, y);
}
