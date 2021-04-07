/*
1.完成函数 flatten，接受数组作为参数，数组元素包含整数或数组，函数返回扁平化后的数组
function tool(result, item) {
item.forEach((item) => {
if (Array.isArray(item)) {
tool(result, item);
} else {
result.push(item);
}
});
}
function flatten(arr) {
const result = [];
tool(result, arr);
return result;
}
console.log(flatten([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
*/
// TODO
