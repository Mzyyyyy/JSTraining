// 借助两个栈 一个存放字符串，一个存放数字，从内到外
var decodeString = function(s) {
    let numStack = []
    let strStack = []
    let tempNum = ''
    let tempStr = ''
    for(let i =0;i<s.length;i++){
        if(isNaN(s[i])){
            if(s[i]!=='['&&s[i]!==']'){
                tempStr += s[i]
            }else if(s[i]==='['){
                numStack.push(+tempNum)
                tempNum = ''
                strStack.push(tempStr)
                tempStr = ''
            }else{
                let num = numStack.pop()||0
                let temp = ''
                for(let i =0;i<num;i++){
                    temp+=tempStr
                }
                tempStr = strStack.pop()+temp
                
            }
        }else{
            tempNum+=s[i]
        }
    } 
    return tempStr
};
console.log(decodeString('abccdcdcdxyz'))