const demo = function (a, b) {
  return new Promise((resolve, reject) => {
    console.log(111);
    if (a > b) {
      reject("some thing error here");
      console.log(222);
    }
    resolve("success");
    console.log(333);
  });
};

test("test success", async () => {
  const res = await demo(1, 2);

  expect(res).toBe("success");
});

test("test error", async () => {
  try {
    const res = await demo(2, 1);

    expect(res).toBe("success");
  } catch (error) {
    console.log(`The error is [${error}]`);
  }
});
