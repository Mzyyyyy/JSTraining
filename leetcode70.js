// 跳台阶问题
// 递归
var numWays = function(n) {
    if(n<=1){
        return 1
    }
    return (numWays(n-1)+numWays(n-2))%1000000007
};
//动态规划
var numWays = function(n) {
    let dp = [1,1]
     for(let i = 2;i <= n;i++){
         dp[i] = dp[i-1]+dp[i-2]
     }
     console.log(dp)
     return dp[n]%1000000007
};
console.log(numWays(7))