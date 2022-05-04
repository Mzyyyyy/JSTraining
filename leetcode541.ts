var reverseStr = function(s, k) {
    let res = ''
    let count = 1
    for(let i = 0;i<s.length;) {
        let str = s.substr(i, k)
        if(count % 2 == 1){
            res += str.split('').reverse().join('')
        }
        else {
            res += str
        }
        i+=k
        count++
    }

    return res
};
console.log(reverseStr("bacdfeg",2))