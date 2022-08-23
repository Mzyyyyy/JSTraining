var reverseOnlyLetters = function(s) {
    let arr = s.split('')
    let len = arr.length
    let left = 0
    let right = len-1
    while (true) {
        while (left < right && !(/^[a-zA-Z]+$/.test(s[left]))) { // 判断左边是否扫描到字母
            left++;
        }
        while (right > left && !(/^[a-zA-Z]+$/.test(s[right]))) { // 判断右边是否扫描到字母
            right--;
        }
        if (left >= right) {
            break;
        }
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++;
        right--;
    }
    return arr.join('')
};