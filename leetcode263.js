var isUgly = function(n) {
    if(n<=0) return false
    if(n===1) return true
    let nums = [2,3,5]
    for(let item of nums){
        while(n%item===0){
        n = n/item
        }
    }
    return n===1
};