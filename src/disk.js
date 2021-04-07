/**
 * 服务器数量n,硬盘个数m,每个服务器自带4个硬盘，让这些硬盘平均分配给这些服务器
 * @param {*} n
 * @param {*} m
 */
function disk(n, m) {
  console.time("disk");
  const disks = 4 * n + m;
  const everyDiskCount = Math.floor(disks / n);
  const leftDisk = disks - everyDiskCount * n;
  const result = [];
  for (let i = 0; i < n - leftDisk; i++) {
    result.push(everyDiskCount);
  }
  for (let i = 0; i < leftDisk; i++) {
    result.push(everyDiskCount + 1);
  }
  console.timeEnd("disk");
  return result;
}

const splitDisk = (n, m) => {
  console.time("splitDisk");
  const result = new Array(n);
  result.fill(0);
  let disks = 4 * n + m;
  let count = n - 1;
  while (disks) {
    result[count]++;
    disks--;
    count--;
    if (count === -1) {
      count = n - 1;
    }
  }
  console.timeEnd("splitDisk");
  return result;
};
console.log(splitDisk(6, 20));
console.log(disk(6, 20));
// console.log(disk(5, 33));
