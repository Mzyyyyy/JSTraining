// function frequencySort(s: string): string {
//     let len = s.length
//     let map = {}
//     for(let i = 0;i<len;i++){
//         console.log(s[i])
//         if(map[s[i]]){
//             map[s[i]] += 1
//         }else{
//             map[s[i]] = 1
//         }
//     }
//     let keys = Object.keys(map)
//     keys.sort((pre,cur)=>{
//         return map[cur] - map[pre]
//     })
//     let res = keys.map(item=>{
//         return item.repeat(map[item])
//     }).join('')
//     return res
// };
// console.log(frequencySort("tree"))