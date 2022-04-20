function isNumber(s: string): boolean {
    let floatArr = s.split('.')
    if(floatArr.length>3) return false
    else if(floatArr.length===1){

    }
    else{

    }
};

function isInt(intS:String):boolean{
    
    return true
}

let exp = ["+100", "5e2", "-123", "3.1416", "-1E-16", "0123","12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]
for(let i = 0;i<exp.length;i++){
    console.log(isNumber(exp[i]))
}