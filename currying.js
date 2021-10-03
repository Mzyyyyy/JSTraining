function curry(fn,...args){
    if(args.length>=fn.length){
        return fn(...args)
    }
    return function(...innerArgs){
        return curry(fn,...args,...innerArgs)
    }
}
function multiFn(a, b, c) {
    return a * b * c;
}

var multi = curry(multiFn);

console.log(multi(2)(3)(4));
console.log(multi(2,3,4));
console.log(multi(2)(3,4));
console.log(multi(2,3)(4));
