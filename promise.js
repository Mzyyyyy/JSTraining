const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
class MyPromise{
    constructor(executor){
        this.status = PENDING
        this.value = undefined
        this.reason = undefined
        this.onResolveCallbacks = []
        this.onRejectCallbacks = []


        let resolve = (value)=>{
            if(this.status===PENDING){
                this.status = FULFILLED
                this.value = value;
                this.onResolveCallbacks.forEach(item=>item())
            }
        }
        let reject = (reason)=>{
            if(this.status===PENDING){
                this.status = REJECTED
                this.reason = reason;
                this.onRejectCallbacks.forEach(item=>item())
            }
        }
        try{
            executor(resolve,reject)
        }catch(err){
            reject(err)
        }
    }
    then(onFulfilled,onRejected){
        return new MyPromise((resolve,reject)=>{
            let fulfilled = ()=>{
                let res = onFulfilled(this.value)
                return res instanceof MyPromise?res.then(resolve,reject):resolve(res)
            }
            let rejected = ()=>{
                let res = onRejected(this.reason)
                return res instanceof MyPromise?res.then(resolve,reject):reject(res)
            }


            if(this.status===FULFILLED){
                onFulfilled(this.value)
            }
            if(this.status===REJECTED){
                onRejected(this.reason)
            }
            
    
            if(this.status === PENDING){
                this.onResolveCallbacks.push(fulfilled)
                this.onRejectCallbacks.push(rejected)
            }
        })
        
    }


    static resolve(value){
        return new MyPromise((resolve,reject)=>{
            if(value instanceof MyPromise){
                return value.then(resolve,reject)
            }
            if(this.status===PENDING){
                this.value=value
                this.status===FULFILLED
                this.onResolveCallbacks.forEach(item=>item())
            }
        })
    }

    static reject(reason){
        return new MyPromise((resolve,reject)=>{
            reject(reason)
        })
    }


}

MyPromise.prototype.finally=function(cb){
    return this.then(res=>{
        return Promise.resolve(cb())
    },reason=>{

    })
}

// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => {f
//       resolve('成功');
//     },1000);
//   }).then(
//     (data) => {
//       console.log('success', data)
//     },
//     (err) => {
//       console.log('faild', err)
//     }
//   )
  
MyPromise.resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, 3000);
  })).then(data=>{
    console.log(data,'success')
  }).catch(err=>{
    console.log(err,'error')
  })