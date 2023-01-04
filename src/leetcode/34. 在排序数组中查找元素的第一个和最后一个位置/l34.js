var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] !== target) {
      left += 1;
    } else {
      while (left <= right) {
        const current = nums[right];
        if (current !== target) {
          right -= 1;
        } else {
          return [left, right];
        }
      }
    }
  }
  if (left === nums.length) {
    return [-1, -1];
  }

  return [left, right];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([5, 7, 7, 8, 8, 10], 5));
console.log(searchRange([], 6));
