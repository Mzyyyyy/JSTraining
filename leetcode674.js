var findLengthOfLCIS = function(nums) {
    let res = 0;
    const n = nums.length;
    let begin = 0;
    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] <= nums[i - 1]) {
            begin = i;
        }
        res = Math.max(res, i - begin + 1);
    }
    return res;
};
console.log(findLengthOfLCIS([1,3,5,4,7]))