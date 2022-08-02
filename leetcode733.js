var floodFill = function(image, sr, sc, color) {
    let init = image[sr][sc]
    let height = image.length
    let width = image[0].length
    let changed = new Array(height).fill(0).map(()=>new Array(width).fill(0))
    deep(image, sr, sc, color, init, height, width,changed)
    return image
  };
  function deep(image, sr, sc, color,init,height,width,changed){
    if( changed[sr][sc]===1) return
    image[sr][sc] = color
    changed[sr][sc]=1
    if(sr - 1 >= 0&&image[sr-1][sc] === init){
      deep(image,sr-1,sc,color,init,height,width,changed)
    }
    if(sr + 1 < height&&image[sr+1][sc] === init){
      deep(image,sr+1,sc,color,init,height,width,changed)
    }
    if(sc - 1 >= 0&&image[sr][sc-1] === init){
      deep(image,sr,sc-1,color,init,height,width,changed)
    }
    if(sc + 1 < width&&image[sr][sc+1] === init){
      deep(image,sr,sc+1,color,init,height,width,changed)
    }
  }