export default function () {
  let result = "";
  for (let i = 1; i < 10; i++) {
    let out = "";
    for (let j = 1; j <= i; j++) {
      out += `${j}x${i}=${i * j}\t`;
    }
    result += out;
    result += "\r\n";
  }

  return result;
}
