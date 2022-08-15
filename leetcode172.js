var trailingZeroes = function(n) {
    let res = 0
  for(let i = 1;i<=n;i++){
    for(let j = i;j%5===0;j/=5){
        res++
    }
  }
  return res
};