var numberOfSteps = function(num) {
    if(num<=1) return num
    if(num % 2===0){
        return 1 + numberOfSteps(num/2)
    }else{
        return 1 + numberOfSteps(num - 1)
    }
};