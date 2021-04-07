// 第1天 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

function getRandom() {
  return Math.floor(Math.random() * 32 + 2);
}

function generateArray(array) {
  const item = getRandom();
  if (!array.includes(item)) {
    array.push(item);
  }
  if (array.length < 5) {
    generateArray(array);
  }
}

const result = [];
generateArray(result);
