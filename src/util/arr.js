export default function () {
  let a = [1, 2, 3];

  console.log(a.length);

  a.length--;

  console.log(a);

  a.length++;

  console.log(a, a[2]);
}
