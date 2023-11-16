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
const isNumber = curry('Number')

//不好的 数组对象混淆
console.log(typeof([1, 2]))

//判定原型 数组对象混淆
let a = []
console.log(a instanceof Object)

//constructor
let a = []
a.constructor == Array