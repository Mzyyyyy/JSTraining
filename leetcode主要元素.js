var majorityElement = function(nums) { // ?
    let candidate = -1;
    let count = 0;
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }
    count = 0;
    const length = nums.length;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }
    return count * 2 > length ? candidate : -1;
};
console.log(majorityElement([1,2,5,9,5,9,5,5,5]))