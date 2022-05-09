var findPoisonedDuration = function(timeSeries, duration) {
    let res = 0;
    let flag = 0;
    for (let i = 0; i < timeSeries.length; ++i) {
        if (timeSeries[i] >= flag) {
            res += duration;
        } else {
            res += timeSeries[i] + duration - flag;
        }
        flag = timeSeries[i] + duration;
    }
    return res;
};

console.log(findPoisonedDuration([1,4],2))