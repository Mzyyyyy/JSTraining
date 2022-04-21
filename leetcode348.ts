// 376
function wiggleMaxLength(nums: number[]): number {
    let len = nums.length
    let f = new Array<number>(len - 1)
    if (len === 1) return 1
    if (len === 2) {
        if (nums[0] === nums[1]) return 1
        return 2
    }
    for (let i = 1; i < len; i++) {
        f[i - 1] = nums[i] - nums[i - 1]
    }
    let arr = [1]
    for (let i = 1; i <= len - 2; i++) {
        // console.log(i, 'out')
        if (f[i] * f[i - 1] < 0) {
            arr[i] = arr[i - 1] + 1
        } else {
            for (let j = i - 1; j >= 0; j--) {
                // console.log(j, 'inner')
                if (f[j] * f[i] < 0) {
                    arr[i] = Math.max(arr[j] + 1, arr[i - 1])
                    break
                }
                arr[i] = arr[i - 1]
            }
        }
    }
    // console.log(arr)
    return arr[arr.length - 1] === 1 ? nums[len - 1] === nums[0] ? 1 : 2 : arr[arr.length - 1] + 1
};

// console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))
// console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))
// console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]))
// console.log(wiggleMaxLength([0, 0, 0]))