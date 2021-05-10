## typeof 原理

js 在底层存储变量的时候，会在变量的机器码的低位 1-3 位存储其类型信息

000：对象
010：浮点数
100：字符串
110：布尔
1：整数

null：所有机器码均为 0

undefined：用 −2^30 整数来表示

Object.prototype.toString.call 是最准确的

## instanceof 原理

```js
function of(left, right) {
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
```
