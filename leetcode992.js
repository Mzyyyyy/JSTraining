var sortArrayByParityII = function(nums) {
    const n  = nums.length;
    const ans = new Array(n);
    let i = 0;
    for (const x of nums) {
        if (!(x & 1)) {
            ans[i] = x;
            i += 2;
        } 
    }

    i = 1;
    for (const x of nums) {
        if (x & 1) {
            ans[i] = x;
            i += 2;
        }
    }

    return ans;
};
