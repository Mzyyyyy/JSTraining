Function.prototype.myCall=function(context,...args){
    context = context || window
    let fun = new Symbol()
    context[fun] = this
    return context.fun(...args)
    
}

Function.prototype.myAplly=function(context,args){
    context = context || window
    let fun = new Symbol()
    context[fun] = this
    return context.fun(args)
}

Function.prototype.myBind=function(context,...args){
    context = context || window
    let fun = new Symbol()
    context[fun] = this
    let that = this
    const res = function(innerArgs){
        if(this instanceof that === true){
            this[fun] = that;
            this[ffunn](...[...args, ...innerArgs]); 
            delete this[fun];
        }else{
            context[fun](...[...args, ...innerArgs]);
            delete context[fun];
        }
    }
    return res
}