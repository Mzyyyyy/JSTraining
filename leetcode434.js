var countSegments = function(s) {
    let res = 0;
    let len = s.length
    for (let i = 0; i < len; i++) {
        if ((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') {
            res++;
        }
    }

    return segmentCount;
};res

console.log(countSegments("Hello, my name is John"))