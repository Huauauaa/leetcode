import { Square } from "../Square";
import { Rectangle } from "../Rectangle";

const s = new Square(2);

test("super", () => {
  expect(s.area).toBe(4);
});

test("static", () => {
  expect(Rectangle.profile).toBe("rect");
  expect(Square.profile).toBe("rect square");
});

test("delete prop", () => {
  s.delete();
});
