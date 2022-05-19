var myPow = function(x, n) {
    if(n===0) return 1
    if(n===1) return x
    let multi = 1
    for(let i =1;i<=Math.abs(n);i++){
        multi *= x
    }
    res = multi
    if(n<0){
        res = 1/multi
    }
    return res
};
console.log(myPow(2,-3))