export function of(left, right) {
  while (true) {
    if (left.__proto__ === null) {
      return false;
    }
    if (left.__proto__ === right.prototype) {
      return true;
    }
    left = left.__proto__;
  }
}
