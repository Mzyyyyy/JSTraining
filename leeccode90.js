var subsetsWithDup = function(nums) {
    let res = []
    let map = {}
    function backTrack(track,start){
        
        if(!map[String(track.sort((a,b)=>a-b))]){
            res.push(track)
            map[String(track)]=true
        }
        for(let i = start;i<nums.length;i++){
            track.push(nums[i])
            backTrack([...track],i+1)
            track.pop()
        }
    }
    backTrack([],0)
    return res
};
console.log(subsetsWithDup([1,2,2]))
console.log(subsetsWithDup([4,4,4,1,4]))