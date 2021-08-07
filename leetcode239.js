// 构造一个单调递减队列，窗口滑动保证队首为当前窗口最大值
var maxSlidingWindow = function(nums, k) {
    const q = [];
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
        while (q[0] <= i - k) {
            q.shift();
        }
        if (i >= k - 1) ans.push(nums[q[0]]);
    }
    return ans;
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))
console.log(maxSlidingWindow([-1,1],1))
console.log(maxSlidingWindow([9,11],2))
console.log(maxSlidingWindow([4,-2],2))
console.log(maxSlidingWindow([1,-1],1))
console.log(maxSlidingWindow([7,2,4],2))
