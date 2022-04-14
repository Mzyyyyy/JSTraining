function largestSumAfterKNegations(nums: number[], k: number): number {
    let arr = nums.sort((a,b)=>{
        return Math.abs(a) - Math.abs(b)
    })
    let len = arr.length
    for(let i = len-1;i>=0;i--){
        if(nums[i]<0&&k>0){
            nums[i] = -nums[i]
            k--
        }else{
            continue
        }
        if(k===0||i===0){
            break
        }
    }
    if(k>0){
        k = k%2
        for(let i = 0;i<len;i++){
            if(k>0){
                nums[i] = -nums[i]
                k--
            }
        }
        
    }
    return arr.reduce((pre,cur)=>{
        return pre+cur
    },0)
};
console.log(largestSumAfterKNegations([4,2,3],1))
console.log(largestSumAfterKNegations([3,-1,0,2],3))
console.log(largestSumAfterKNegations( [2,-3,-1,5,-4],2))