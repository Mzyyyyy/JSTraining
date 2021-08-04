var removeDuplicates = function(nums) {
    if(nums.length<=2){
        return nums
    }
    let left = 0
    let right = 1
    while(right<nums.length){
        if(nums[left-2]!==nums[right]){
            nums[left] = nums[right]
            left++
        }
        right++
    }
    return left
};
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))
