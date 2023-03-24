const demo = function (a, b) {
  return new Promise((resolve, reject) => {
    console.log(111);
    if (a > b) {
      reject('some thing error here');
      console.log(222);
    } else if (a === b) {
      throw 1;
    }
    resolve('success');
    console.log(333);
  });
};

test('test success', async () => {
  const res = await demo(1, 2); // 111 333

  expect(res).toBe('success');
});

test('test error', async () => {
  try {
    const res = await demo(2, 1); // 111 222 333

    expect(res).toBe('success');
    console.log(444);
  } catch (error) {
    console.log(`The error is [${error}]`); // The error is [some thing error here]
  }
});

test('test throw', async () => {
  try {
    const res = await demo(2, 2); // 111

    expect(res).toBe('success');
    console.log(444);
  } catch (error) {
    console.log(`The error is [${error}]`); // The error is [1]
  }
});
