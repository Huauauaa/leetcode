/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map(nums.map((item, index) => [item, index]));
  for (let i = 0; i < nums.length; i++) {
    const index = map.get(target - nums[i]);
    if (index !== undefined && index !== i) {
      return [i, map.get(target - nums[i])];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
