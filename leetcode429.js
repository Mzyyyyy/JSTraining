var levelOrder = function(root) {
    if(!root) return []
    let queue = [root]
    let res = []
    while(queue.length){
      let temp = []
      let len = queue.length
      for(let i = 0;i<len;i++){
        let cur = queue.shift()
        temp.push(cur.val)
        cur.children.forEach(item=>{
            queue.push(item)
        })
      }
      res.push(temp)
    }
    return res
};