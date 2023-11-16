    for(var i=0;i<3;i++){
        setTimeout(function(){
            console.log(i)
        })
    }
    new Promise((resolve,reject)=>{
        console.log('promise1')
        for(var i=0;i<1000;i++){
            if(i==999){
                resolve()
            }
        }
    }).then(()=>{
        console.log('then')
    })
    console.log('5')

let promise = new Promise(function(resolve, reject){
    console.log("resolve")
    resolve()
})

promise.then(() => {
    console.log("resolved")
}, () => {
    console.log("faiiled")
}).then(() => {
    console.log(1)
})

const asy = function(x, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x)
        }, time)
    })
}

async function test(){
    console.log("AAA")
    const b = await asy(1, 5000)
    console.log(b)
    console.log("OK")
}
test()

Promise.newall = function (iterator) {  
    let count = 0//用于计数，当等于len时就resolve
    let len = iterator.length
    let res = []//用于存放结果
    return new Promise((resolve,reject) => {
        for(var item of iterator){
            Promise.resolve(item).then((data) => {
                res[count++] = data
                if(count === len){
                    resolve(res)
                }
            })
            .catch(e => {
                reject(e)
            })
        }
    })
}
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('foo'), 2500);
});

Promise.newall([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});

Promise.Race = function (iterators) {  
    return new Promise((resolve,reject) => {
        for (const p of iterators) {
            Promise.resolve(p).then((res) => {
                resolve(res)
            })
            .catch(e => {
                reject(e)
            })
        }
    })
}

var promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("one"), 5000);
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("two"), 1000);
});

Promise.Race([promise1, promise2]).then(function(value) {
  console.log(value);
});