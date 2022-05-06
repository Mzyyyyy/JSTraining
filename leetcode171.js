var titleToNumber = function(columnTitle) {
    let num = 0;
    let multi = 1; // 26^0
    let len = columnTitle.length
    for (let i =  len- 1; i >= 0; i--) {
        const k = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1;
        num += k * multi;
        multi *= 26; // 26^1
    }
    return num;
};
console.log(titleToNumber("AB"))