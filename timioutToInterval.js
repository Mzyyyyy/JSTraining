function mySetTimeout(fn,time){
    let timer = null
    function func(){
        fn()
        timer = setTimeout(func,time)
    }
    func()
    return {
        clear(){
            clearTimeout(timer)
        }
    }
}
let interval = mySetTimeout(()=>{console.log(1)},2000)