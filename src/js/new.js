function _new(fn) {
  const instance = Object.create(null);
  const f = fn.bind(instance);
  const result = f();
  return typeof result === "object" && result !== null ? result : instance;
}

function con() {
  return { id: 1 };
}

const ins = _new(con);
const ins1 = _new(con);

console.log(ins, ins1);
ins.id = 2;
console.log(ins, ins1);
