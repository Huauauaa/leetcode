import { of } from "./mine/instanceof";

console.log(of([], Object));

class Entity {}

const e = new Entity();

console.log(of(e, Entity));
