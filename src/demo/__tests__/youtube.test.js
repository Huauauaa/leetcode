function toAccounting(n) {
  if (Number.isNaN(Number(n))) {
    throw new Error(1);
  }
  return n >= 0 ? n : `(${-n})`;
}

test("code", () => {
  expect(toAccounting(0)).toBe(0);
  expect(toAccounting(10)).toBe(10);
  expect(toAccounting(-5)).toBe("(5)");
  // expect(toAccounting(undefined)).toThrow(NaN);
  expect(() => {
    toAccounting(undefined);
  }).toThrow(Error);
});

test("key", () => {
  const types = {
    0: "a",
    1: "b",
  };

  expect(Object.keys(types)).toStrictEqual(["0", "1"]);

  Object.freeze(types);

  // types.name = "types";

  expect(Object.keys(types)).toStrictEqual(["0", "1"]);
});
