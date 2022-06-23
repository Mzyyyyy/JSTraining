var lemonadeChange = function(bills) {
    let map = {
        5:0,
        10:0,
    }
    let len = bills.length
    for(let i = 0;i<len;i++){
        let cur = bills[i]
        if(cur===5){
            map[5] += 1 
        }else if(cur === 10){
        if(map[5]===0) return false
            map[5]-=1
            map[10]+=1
        }else{
        if((map[10]===0&&map[5]<3)||(map[5]===0)) return false
            if(map[10]){
                map[10] -= 1
                map[5] -= 1
            }else{
                map[5] -= 3
            }
        }
    }
    return true
};