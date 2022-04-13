// function eraseOverlapIntervals(intervals: number[][]): number {
//     intervals.sort((a, b) => a[0] - b[0]);
//     let len =intervals.length
//     let f:Array<number> = new Array(len).fill(1)
//     for(let i = 1;i<len;i++){
//         for(let j = 0;j<i;j++){
//             if(intervals[j][1]<=intervals[i][0]){
//                 f[i] = Math.max(f[i],f[j]+1)
//             }
//         }
//     }
//     return len - f[len-1]
// };

function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a,b)=>a[0]-b[0])
    let count=0
    for(let i=0;i<intervals.length-1;i++){
        const [a,b]=intervals[i]
        const [c,d]=intervals[i+1]
        if(b>c){
            count++
            intervals.splice(i+1,1)
            i--
        }
    }
    return count
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))
console.log(eraseOverlapIntervals([ [1,2], [1,2], [1,2] ]))
console.log(eraseOverlapIntervals([ [1,2], [2,3] ]))