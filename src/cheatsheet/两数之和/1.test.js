const twoSum = (nums, target) => {
  const m = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    const left = target - current;
    if (m.has(left)) {
      return [m.get(left), i];
    }
    m.set(current, i);
  }
  return [];
};

// const nums = [2, 7, 11, 15];
// const target = [9];

// const nums = [3, 2, 4];
// const target = [6];

const nums = [3, 3];
const target = [6];

const result = twoSum(nums, target);
console.log(result);
