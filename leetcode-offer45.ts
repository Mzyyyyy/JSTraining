function minNumber(nums: number[]): string {
    return nums.sort((pre,cur)=>{
        return Number(`${pre}${cur}`) - Number(`${cur}${pre}`)
    }).join('')
};

console.log(minNumber([3,30,34,5,9]))