class A {
  static id = 1;

  static isEqual() {
    return A.id === this.id;
  }
}

test("class", () => {
  expect(A.isEqual()).toBe(true);
});
