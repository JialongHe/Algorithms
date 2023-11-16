console.log(Object.prototype.toString.call(1))

const checktype = function(type, content){
    return Object.prototype.toString.call(content) === `[object ${type}]`
}

console.log(checktype('Number', 2))

const curry = function(type){
    return function(content){
        return Object.prototype.toString.call(content) === `[object ${type}]`
    }
}
const isNumber = curry('Number')(2)
console.log(isNumber)

function push(array, ...items){
    array.push(...items);
}


function curry ( fn ) {
    var c = (...arg) => (fn.length === arg.length) ?
            fn (...arg) : (...arg1) => c(...arg, ...arg1)
    return c
}

arr = ["a", "b", 3]
console.log(arr.toString())
console.log(arr.valueOf())
console.log(arr)

var arr = [1, 2, 3, 4]
console.log(arr.reduce(function(prev, cur, ind, arr){
    return prev + cur
}))

fn = () => {
    console.log([...args]);
}

function curry(fn){
    let length = fn.length;
    const curryFn = (args) => (...arg) => {
        const curryArgs = args.concat([...arg])
        if(curryArgs.length === length) {
            return fn(...curryArgs)
        }
        return curryFn(curryArgs)
    }
    return curryFn([]);
}

let add = (a, b, c) => {
    return a + b + c
}
let curryAdd = curry(add)

console.log(curryAdd(1, 2)(3));

let time = 1607062894417

function timestampToTime(timestamp) {
    var date = new Date(timestamp);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y+M+D+h+m+s;
}


let vacantParams = {
    k1: "test"
}

