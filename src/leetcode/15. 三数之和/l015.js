var threeSum = function (nums) {
  const len = nums.length;
  if (len < 3) return [];
  nums.sort((a, b) => a - b);
  const resSet = new Set();
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break;
    let l = i + 1,
      r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
        continue;
      }
      if (sum > 0) {
        r--;
        continue;
      }
      resSet.add(`${nums[i]},${nums[l]},${nums[r]}`);
      l++;
      r--;
    }
  }
  return Array.from(resSet).map((i) => i.split(','));
};

// let res = threeSum([-1, 0, 1, 2, -1, -4]);
let res = threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]); // [-4, -3, -2, -1, -1, 0, 0, 1, 2, 3, 4]
console.log(res);
