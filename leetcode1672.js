var maximumWealth = function(accounts) {
    let height = accounts.length
  let width = accounts[0].length
  let max = 0
  for(let i=0;i<height;i++){
    let sum = 0
    for(let j = 0;j<width;j++){
      sum += accounts[i][j]
    }
    max = sum>max?sum:max
  }
  return max
};