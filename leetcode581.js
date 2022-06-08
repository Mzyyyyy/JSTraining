var findUnsortedSubarray = function(nums) {
    let len = nums.length;
    let max = -Infinity
    let min = Infinity
    let left = -1;
    let right = -1;
    for (let i = 0; i < len; i++) {
        
        if (max > nums[i]) {
            right = i;
        } else {
            max = nums[i];
        }
        if (min < nums[len - i - 1]) {
            left = len - i - 1;
        } else {
            min = nums[len - i - 1];
        }
    }
    // console.log(left,right,max,min)
    return right === -1 ? 0 : right - left + 1;
};

console.log(findUnsortedSubarray([2,6,4,8,10,9,15]))