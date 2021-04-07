const arr = [
  { name: "a" },
  { name: "b" },
  { name: "c" },
  { name: "d", id: 1 },
].sort((a, b) => Number(b.id || 0) - Number(a.id || 0));

console.log(arr.map((item) => item.name));
