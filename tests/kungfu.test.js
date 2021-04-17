import _ from "../src/kungfu";

test("chunk", () => {
  expect(_.chunk(["a", "b", "c", "d"], 2)).toStrictEqual([
    ["a", "b"],
    ["c", "d"],
  ]);

  expect(_.chunk(["a", "b", "c", "d"], 3)).toStrictEqual([
    ["a", "b", "c"],
    ["d"],
  ]);

  expect(_.chunk(["a", "b"], 1)).toStrictEqual([["a"], ["b"]]);
  expect(_.chunk(["a", "b"])).toStrictEqual([["a"], ["b"]]);
});

test("range", () => {
  expect(_.range(4)).toStrictEqual([0, 1, 2, 3]);
  expect(_.range(-4)).toStrictEqual([0, -1, -2, -3]);
  expect(_.range(1, 5)).toStrictEqual([1, 2, 3, 4]);
  expect(_.range(0, 20, 5)).toStrictEqual([0, 5, 10, 15]);
  expect(_.range(0, -4, -1)).toStrictEqual([0, -1, -2, -3]);
  expect(_.range(1, 4, 0)).toStrictEqual([1, 1, 1]);
  expect(_.range(0)).toStrictEqual([]);
  expect(_.range()).toStrictEqual([]);
});
