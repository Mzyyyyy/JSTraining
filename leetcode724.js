var pivotIndex = function(nums) {
    let len = nums.length
    let sums = new Array(len).fill(0)
    sums[0] = nums[0]
    for(let i = 1;i<len;i++){
        sums[i] = sums[i-1] + nums[i]
    }
    for(let i = 0;i<len;i++){
        if((sums[i-1]||0) === sums[len-1] - sums[i]){
            return i
        }
    }
    return -1
};
console.log(pivotIndex( [1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([2, 1, -1]))