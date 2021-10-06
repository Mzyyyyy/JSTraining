Array.prototype.myReduce = function(fn,initialValue){
    let arr = this
    let value = initialValue||arr[0]
    let startIndex = initialValue?0:1
    let len = arr.length
    for(let i = startIndex;i<len;i++){
        let cur = arr[i]
        value = fn(value,cur)
    }
    return value
}


let arr = [1,2,3,4,5]

let res = arr.myReduce((pre,cur)=>{
    return pre+cur
})

console.log(res)
