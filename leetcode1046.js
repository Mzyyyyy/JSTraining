var lastStoneWeight = function(stones) {
    let arr = stones.sort((pre,cur) =>{
        return pre - cur
    })
    while (arr.length > 1) {
        const d = arr.pop() - stones.pop()
        if (d) { 
            arr.push(d)
            arr = arr.sort((pre,cur) =>{
                return pre - cur
            })
        } 
    }
    console.log(arr)
    return arr.length ? arr[0] : 0

};

console.log(lastStoneWeight([2,7,4,1,8,1]))