let coins = [1, 2, 5],
  amount = 11;

let dp = Array(amount + 1).fill(amount + 1);
console.log(dp);
dp[0] = 0;
for (const coin of coins) {
  for (let j = coin; j <= amount; ++j) {
    dp[j] = Math.min(dp[j], dp[j - coin] + 1);
    console.log(dp);
  }
  console.log('--------');
}
