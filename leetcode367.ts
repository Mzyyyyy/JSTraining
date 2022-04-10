function isPerfectSquare(num: number): boolean {
    if(num===1)return true
    let mid:number = num/2
    for(let i = 1;i<=mid;i++){
        if(i*i===num) return true
    }
    return false
};
console.log(isPerfectSquare(14))