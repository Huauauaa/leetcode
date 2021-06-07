import quick from "../quick";

test("even", () => {
  const arr = [2, 1, 4, 3];

  const result = quick(arr.slice());
  expect(result).toStrictEqual([1, 2, 3, 4]);
});

test("odd", () => {
  const arr = [2, 1, 4, 3, -1];

  const result = quick(arr.slice());
  expect(result).toStrictEqual([-1, 1, 2, 3, 4]);
});

test("same", () => {
  const arr = [2, 1, 4, 3, 3, 4];

  const result = quick(arr.slice());
  expect(result).toStrictEqual([1, 2, 3, 3, 4, 4]);
});
