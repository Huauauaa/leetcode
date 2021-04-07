// 5.有一个扁平的数组描述了一系列的地理信息，类似于
// var locationList = [
// { id: 0, name: "中国" },
// { id: 1, pid: 0, name: "广东省" },
// { id: 2, pid: 1, name: "深圳市" },
// { id: 3, pid: 1, name: "广州市" },
// ...
// ]
// 其中每个节点的 `pid` 指向了它所属上级地区。现在要求你把这个数组转换成树状结构：

// var locationTree = buildLocationTree(locationList);
// console.log(locationTree);

// function buildLocationTree(locationList) {
// const result = locationList.map(item => {
// const subLocations = locationList.filter(i => i.pid === item.id);
// if (subLocations) {
// item.subLocations = subLocations;
// }
// return item;
// });
// return result[0];
// }
//   其中 `locationTree` 的结构应该如下：

// {
// root: {
// id: 0,
// name: '中国',
// subLocations: [
// {
// id: 1,
// pid: 0,
// name: '广东省',
// subLocations: [
// { id: 2, pid: 1, name: "深圳市" },
// { id: 3, pid: 1, name: "广州市" },
// // ...
// ]
// },
// // ...
// ]
// }
// }

// TS 类型：

// interface LocationTree {
// root: LocationNode;
// }
// interface LocationNode {
// id: number;
// pid?: number; // 问号表示可选属性
// name: string;
// subLocations?: LocationNode[];
// }

// 请实现 `buildLocationTree()`。
