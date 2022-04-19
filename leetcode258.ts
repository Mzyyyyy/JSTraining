function addDigits(num: number): number {
    let arr = num.toString().split('').map(item=>Number(item))
    let res = arr.reduce((pre,cur)=>{
        return pre + cur
    },0)
    if(res>=10){
        return addDigits(res)
    }
    return res
};

console.log(addDigits(38))