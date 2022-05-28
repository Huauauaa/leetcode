function instance_of(l, r) {
  const target = r.prototype;
  let chain = Object.getPrototypeOf(l);

  while (chain) {
    if (chain === target) {
      return true;
    }
    chain = Object.getPrototypeOf(chain);
  }

  return false;
}

class A {}

class B extends A {}

class C extends B {}

class D {}

const c = new C();
const d = new D();

console.log(instance_of(c, A));
console.log(instance_of(d, A));
