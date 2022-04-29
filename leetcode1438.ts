function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {

    let max = Math.max(...candies)
    let len = candies.length
    let res = new Array<boolean>(len)
    for(let i = 0;i < len; i++){
        if(candies[i]+extraCandies>=max){
            res[i] = true
        }else{
            res[i] = false
        }
    }
    return res
};
console.log(kidsWithCandies([2,3,5,1,3],3))