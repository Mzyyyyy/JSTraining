var gameOfLife = function(board) {
    let height = board.length
  let width = board[0].length
  let res = new Array(height).fill(0).map(()=>new Array(width))
  for(let i = 0;i<height;i++){
    for(let j = 0;j<width;j++){
      let sum = 0
      for(let m = i-1;m<=i+1;m++){
        for(let n = j-1;n<=j+1;n++){
          if(!(m===i&&n===j)){
            sum+=board[m]&&board[m][n]?board[m][n]:0
          }
        }
      }
      if(sum<2){
        res[i][j] = 0
      }else if((sum===2||sum===3)&&board[i][j]===1){
        res[i][j] = 1
      }else if(sum>3){
        res[i][j] = 0
      }else if(sum===3&&board[i][j]===0){
        res[i][j] = 1
      }else{
        res[i][j] = board[i][j]
      }
    }
  }
   for(let i = 0;i<height;i++){
    for(let j = 0;j<width;j++){
        board[i][j] = res[i][j]
    }
   }
};