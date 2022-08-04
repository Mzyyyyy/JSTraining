var maxProfit = function(prices, fee) {
    let len = prices.length
    // dp[i][0] 代表第i天手里没有股票的最大利润
    // dp[i][1] 代表第i天手里有股票的最大利润
    let dp = new Array(len).fill(0).map(()=>[0,0])
    dp[0][0] = 0 // 不操作 无利润
    dp[0][1] = -prices[0] // 花prices[0]买入，故当前手里利润为-prices[0]
    for(let i = 1 ;i<len;i++){
        // 第i天手里没有股票的利润 = max(前一天手里也没有股票的利润，前一天手里有股票并以今天的价格卖出)
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] - fee + prices[i])
        // 第i天手里有股票的利润 = max(前一天手里也有股票(不操作)，前一天手里没股票，并以今天的价格买入)
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0] - prices[i])
    }
    // 因之前计算的是最大利润，故当前不持有股票的利润一定大于当前持有股票的利润
    return dp[len-1][0]
};