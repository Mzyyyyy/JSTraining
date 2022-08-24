var runningSum = function(nums) {
    let arr = []
    let len = nums.length
    for(let i = 0;i<len;i++){
        arr[i] = nums[i] + (arr[i-1] || 0)
    }
    return arr
};