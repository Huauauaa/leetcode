import { parsePath } from './vue/parsePath.js';

const getter = parsePath('a.b.c');

const result = getter({
  a: {
    b: {
      c: 111
    }
  }
});
