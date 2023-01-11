nums = [1, 5, 11, 5];
// nums = [1, 2, 3, 4];
const m = nums.length;
const sum = nums.reduce((a, b) => a + b);
if (sum % 2 === 1) {
  console.log(false);
  return;
}
const n = sum / 2;

// const dp = Array(m + 1).fill(Array(n + 1).fill(false));
// dp[1][0] = true;
// for (let i = 1; i <= m; i++) {
//   for (let j = n; j >= nums[i - 1]; j--) {
//     console.log(dp[i - 1][j], dp[i - 1][j - nums[i - 1]]);
//     dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
//   }
// }
// for (let item of dp) {
//   console.log(item);
// }
const dp = Array(n + 1).fill(false);
dp[0] = true;
for (let i = 1; i <= m; i++) {
  for (let j = n; j >= nums[i - 1]; j--) {
    dp[j] = dp[j] || dp[j - nums[i - 1]];
  }
  console.log(dp);
}
