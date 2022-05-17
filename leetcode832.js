var flipAndInvertImage = function(image) {
    let len = image.length
    let data = [1,0]
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(j<Math.floor(len/2)){
                [image[i][j],image[i][len-j-1]] = [image[i][len-j-1],image[i][j]]
            }else if(j>Math.floor(len/2)){
                // image[i][j] = data[image[i][j]]
            }
            image[i][j] = data[image[i][j]]
        }
    }
    return image
};
console.log(flipAndInvertImage(
    [
        [1,1,0],
        [1,0,1],
        [0,0,0]]
))