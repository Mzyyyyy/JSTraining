function twoSum(nums: number[], target: number): number[] {
    // let map = {}
    // let len = nums.length
    // for(let i = 0;i<len;i++){
    //     if(map[target - nums[i]]){
    //         return [target - nums[i],nums[i]]
    //     }else{
    //         map[nums[i]] = true
    //     }
    // }
    // return []

    let l = 0, r = nums.length - 1;
    while(l < r){
        if(nums[l] + nums[r] === target) return [nums[l], nums[r]];
        else if (nums[l] + nums[r] > target) r--;
        else l++;
    }
    return [];
};

console.log(twoSum([2,7,11,15],9))