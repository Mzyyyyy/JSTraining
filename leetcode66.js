var plusOne = function(digits) {
    let len = digits.length;
    for (let i = len - 1; i >= 0; --i) {
        if (digits[i] !== 9) {
            ++digits[i];
            for (let j = i + 1; j < len; ++j) {
                digits[j] = 0;
            }
            return digits;
        }
    }

    let res = new Array(len + 1).fill(0);
    res[0] = 1;
    return res;
};

console.log(plusOne([1,2,3]))