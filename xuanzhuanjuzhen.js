var rotate = function(matrix) {

    // let len = matrix.length;
    // let arr = new Array(len).fill(0).map(() => new Array(len).fill(0));
    // for (let i = 0; i < len; i++) {
    //     for (let j = 0; j < len; j++) {
    //         arr[j][len - i - 1] = matrix[i][j];
    //     }
    // }
    // for (let i = 0; i < len; i++) {
    //     for (let j = 0; j < len; j++) {
    //         matrix[i][j] = arr[i][j];
    //     }
    // }
    // return matrix


    let len = matrix.length;
    for(let i = 0;i<len;i++){
        for(let j = 0;j<Math.floor(len/2);j++){
        [matrix[i][j],matrix[i][len-j-1]] = [matrix[i][len-j-1],matrix[i][j]]
        }
    }
    for(let i = 0;i<len;i++){
        for(let j = 0;j<len-i;j++){
        let temp = matrix[i][j]
        matrix[i][j] = matrix[len-j-1][len-i-1]
        matrix[len-j-1][len-i-1] = temp
        // [ matrix[i][j] , matrix[len-j-1][len-i-1] ] = [ matrix[len-j-1][len-i-1] , matrix[i][j] ]
        }
    }
    return matrix
};