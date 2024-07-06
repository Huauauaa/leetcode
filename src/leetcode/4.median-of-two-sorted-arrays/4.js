/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const res = nums1.slice();

  const insert = (target) => {
    let left = 0;
    let right = res.length - 1;
    while (left <= right) {
      const middle = (left + right) >> 1;

      if (res[middle] > target) {
        right = middle - 1;
      } else {
        left++;
      }
    }

    res.splice(left, 0, target);
  };

  nums2.forEach((item) => insert(item));
  const length = res.length;

  if (length % 2 === 0) {
    return (res[length >> 1] + res[(length >> 1) - 1]) / 2;
  }
  return res[length >> 1];
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
