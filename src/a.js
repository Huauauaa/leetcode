console.log("a starting");
exports.done = false;
const b = require("./b.js");
console.log("in a, b.done = %j", b.done);
exports.done = true;
console.log("a done");
// 为了防止模块载入的死循环，Node.js 在模块第一次载入后会把它的结果进行缓存，下一次再对它进行载入的时候会直接从缓存中取出结果
//在循环依赖的每个模块中先导出自身，然后再导入其他模块
