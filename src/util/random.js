export default function (min = 0, max = 1) {
  return Math.trunc(Math.random() * (max - min) + min);
}
