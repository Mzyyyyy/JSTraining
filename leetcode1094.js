var carPooling = function(trips, capacity) {
    let len = trips.length
  let start = {}
  let end = {}
  let max = 0
  for(let i= 0;i<len;i++){
    let [count,startI,endI] = trips[i]
    max = Math.max(max,endI)
    start[startI] = start[startI]?start[startI]+=count:count
    end[endI] = end[endI]?end[endI]+=count:count
  }
  let current = 0
  for(let i = 0;i<=max;i++){
    current = current - (end[i]||0) + (start[i]||0)
    if(current>capacity){
      return false
    }
  }
  return true
}; 