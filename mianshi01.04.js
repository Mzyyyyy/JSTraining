var canPermutePalindrome = function(s) {
    let map = {}
  let count1 = 0
  let count2 = 0
  let len = s.length
  for(let i =0;i<len;i++){
    if(map[s[i]]){
      map[s[i]]+=1
      if(map[s[i]]%2===0){
        count2++
        count1--
      }else{
        count2--
        count1++
      }
    }else{
      map[s[i]] = 1
      count1++
    } 
  }
  return count1<=1
};