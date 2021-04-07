function gcd(a, b) {
  if (a === b) {
    return b;
  }
  if (a > b) {
    a -= b;
  } else {
    b -= a;
  }
  return gcd(a, b);
}

function gcd1(a, b) {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}
console.time("gcd");
console.log(gcd(7890, 123456));
console.timeEnd("gcd");
console.time("gcd1");
console.log(gcd1(7890, 123456));
console.timeEnd("gcd1");
