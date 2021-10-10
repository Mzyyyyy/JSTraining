function deep(target,map=new Map()){
    if(typeof target === 'object'){
        if(target===null){
            return target
        }
        if(map.get(target)){
            return map.get(target)
        }
        let obj = Array.isArray(target)?[]:{}
        map.set(target,obj)
        for(let key in target){
            obj[key] = deep(targeet[key],map)
        }
        return obj
    }else if(typeof target === 'function'){
        
    }
    else{
        return taeget
    }
}
let a  = function(){

}
console.log(typeof null,typeof a)