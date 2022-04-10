function productExceptSelf(nums: number[]): number[] {
    let len = nums.length
    let l = new Array<number>(len)
    let r = new Array<number>(len)
    let res = new Array<number>(len)
    l[0] = 1
    r[len-1] = 1
    for(let i = 1;i<len;i++){
        l[i] = nums[i-1] * l[i-1]
    }
    for(let i = len-2;i>=0;i--){
        r[i] = nums[i+1] * r[i+1]
    }
    console.log(l,r)
    for(let i = 0;i<len;i++){
        res[i] = l[i]*r[i]
    }
    return res
};
console.log(productExceptSelf([4,5,1,8,2]))