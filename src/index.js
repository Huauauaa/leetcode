import example from "./math/prime-in";

console.time("prime");

const result = example(1000);

console.timeEnd("prime");

console.log(result);
