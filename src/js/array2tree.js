const nodes = [
  {
    id: 1,
    parentId: null,
  },
  {
    id: 4,
    parentId: 2,
  },
  {
    id: 2,
    parentId: 1,
  },
  {
    id: 3,
    parentId: 1,
  },

  {
    id: 5,
    parentId: 4,
  },
];

const listToTree = (arr = []) => {
  const map = new Map();
  let result = {};
  for (const item of arr) {
    if (item.parentId === null) {
      result = item;
      result.children = [];
      continue;
    }
    if (!map.has(item.id)) {
      map.set(item.id, item);
    }
    let parent = map.get(item.parentId);
    if (!parent) {
      parent = arr.find((i) => i.id === item.parentId);
      map.set(parent.id, parent);
    }

    if (!parent.children) {
      parent.children = [];
    }

    parent.children.push(item);
  }

  return result;
};

console.time("listToTree");
listToTree(nodes);
console.timeEnd("listToTree");
