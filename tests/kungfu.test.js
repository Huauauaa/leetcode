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
});
