var compareVersion = function(version1, version2) {
    let arr1 = version1.split('.')
    let arr2 = version2.split('.')
    let len = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < len; i++) {
        if (Number(arr1[i] || 0) < Number(arr2[i] || 0)) {
            return -1
        } else if (Number(arr1[i] || 0) > Number(arr2[i] || 0)) {
            return 1
        } else {
        if (i === len - 1) {
            return 0
        } else {
            continue
        }
        }
    }
};
console.log(compareVersion('0.1','1.1'))