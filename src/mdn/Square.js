import { Rectangle } from "./Rectangle";

export class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }

  static get profile() {
    return `${super.profile} square`;
  }

  delete() {
    delete super.id;
  }
}
