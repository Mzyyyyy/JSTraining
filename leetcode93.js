// 回溯
var restoreIpAddresses = function(s) {
    let res = []
    function backTrack(path,index){
        let len =path.length
        if(len>4){
            return
        }
        if(len===4&&index===s.length){
            res.push(path.join('.'))
        }
        for(let i = index;i<s.length;i++){
            let str = s.substr(index,i-index+1)
            if(str.length>3||+str>255)break
            if(str.length>1&&str[0]==='0') break
            path.push(str)
            backTrack([...path],i+1)
            path.pop()
        }

    }
    backTrack([],0)
    return res
};
console.log(restoreIpAddresses('0000'))