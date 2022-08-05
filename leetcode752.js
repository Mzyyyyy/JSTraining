var openLock = function(deadends, target) {
    if(target==='0000') return 0
    let len = deadends.length
  let map = {}
  for(let  i =0; i < len; i++){
    map[deadends[i]] = true
  }
  if(map['0000']) return -1
  let current = ['0000',0]
  let queue = [current]
  let writed = {}
  for(let i=0;i<queue.length;i++){
    for(let j = 0;j<4;j++){
      let temp = queue[i][0].split('')
      temp[j] = Number(temp[j])+1
      let changed = temp.join('')

      let tempCut = queue[i][0].split('')
      tempCut[j] = Number(tempCut[j])-1 ===-1?9:Number(tempCut[j])-1
      let changedCut = tempCut.join('')

      if(changed === target){
        return queue[i][1]+1
      }
      if(!map[changed] && !writed[changed]){
        if(Number(changed) < 9999){
          queue.push([changed,queue[i][1]+1])
          writed[changed] = true
        }
        
      }
      if(changedCut === target){
        return queue[i][1]+1
      }
      if(!map[changedCut] && !writed[changedCut]){
        if(Number(changedCut) < 9999){
          queue.push([changedCut,queue[i][1]+1])
          writed[changedCut] = true
        }
      }
    }
  }
  return -1
};
