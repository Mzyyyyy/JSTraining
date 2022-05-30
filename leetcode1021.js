var removeOuterParentheses = function(s) {
    let res = '';
    let len =s.length
    let stack = [];
    for (let i = 0; i < len; i++) {
        let current = s[i];
        if (current === ')') {
            stack.pop();
        }
        if (stack.length) {
            res += current;
        }
        if (current === '(') {
            stack.push(current);
        }
    }
    return res;
};

console.log(removeOuterParentheses("(()())(())"))