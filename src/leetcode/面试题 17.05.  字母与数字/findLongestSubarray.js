const findLongestSubarray = function (array) {
  const indices = new Map();
  indices.set(0, -1);
  let maxLength = 0;
  let startIndex = -1;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (/\d/.test(array[i])) {
      sum--;
    } else {
      sum++;
    }
    if (indices.has(sum)) {
      const firstIndex = indices.get(sum);
      if (i - firstIndex > maxLength) {
        maxLength = i - firstIndex;
        startIndex = firstIndex + 1;
      }
    } else {
      indices.set(sum, i);
    }
  }
  if (maxLength === 0) {
    return [];
  }
  return [...array.slice(startIndex, startIndex + maxLength)];
};

console.log(findLongestSubarray(['3', '8', '1', '2', 'B']));
