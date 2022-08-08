var change = function(amount, coins) {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    let len = coins.length
    for (let i = 0;i<len;i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]];
        }
    }
    return dp[amount];
};
console.log(change(5,[1,2,5]))