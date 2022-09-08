var findDiagonalOrder = function(mat) {
    let height = mat.length
  let width = mat[0].length
  let count = height + width - 1
  let res = []
  for(let i =0;i<count;i++){
    if(i%2 === 0){
      let x = i<height? i : height - 1
      let y = i<height? 0 : i - height + 1
      while(x<height && y<width &&x>=0 &&y>=0){
        res.push(mat[x][y])
        x--
        y++
      }
    }else{
      let y = i<width? i : width - 1
      let x = i<width? 0 : i - width + 1
      while(x<height && y<width &&x>=0 &&y>=0){
        res.push(mat[x][y])
        x++
        y--
      }
    }
  }
  return res
};