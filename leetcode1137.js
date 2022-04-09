var tribonacci = function(n) {
    if(n===0) return 0
    if(n===1||n===2) return 1
    let left = 0
    let mid = 1
    let right = 1

    for(let i = 3 ; i <= n ; i++){
        let cur = left + mid +right
        left = mid
        mid = right
        right = cur
    }
    return right
};
console.log(tribonacci(25))