function islandPerimeter(grid: number[][]): number {
    let height = grid.length
    let width = grid[0].length
    let res = 0
    for(let i = 0;i<height;i++){
        for(let j = 0;j<width;j++){
            if(grid[i][j]===1){
                if(!grid[i-1]||grid[i-1][j]===0||!grid[i-1][j]){
                    res++
                }
                if(!grid[i+1]||grid[i+1][j]===0||!grid[i+1][j]){
                    res++
                }
                if(grid[i][j-1]===0||!grid[i][j-1]){
                    res++
                }
                if(grid[i][j+1]===0||!grid[i][j+1]){
                    res++
                }
            }   
        }
    }
    return res
};
console.log(
    islandPerimeter(
        [
            [0,1,0,0],
            [1,1,1,0],
            [0,1,0,0],
            [1,1,0,0]
        ]
    )
)

console.log(
    islandPerimeter(
        [
            [1]
        ]
    )
)

console.log(
    islandPerimeter(
        [
            [1,0]
        ]
    )
)