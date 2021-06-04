import validate from "../url";

test("1", () => {
  expect(validate("http://www.qq.com")).toBe(true);
  expect(validate("https://www.qq.com")).toBe(true);
});

test("2", () => {
  expect(validate("http://www.qq.com.cn")).toBe(false);
});

test("3", () => {
  expect(validate("http://www.qq.com/a/b")).toBe(true);
});

test("4", () => {
  expect(validate("http://www.123qq.com?a=1")).toBe(false);
});
