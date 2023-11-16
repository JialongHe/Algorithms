function person(a, b, c, d){
    console.log(this.name)
    console.log(a, b, c, d)
}

var egg = {
    name: "test"
}

Function.prototype.newcall = function(obj){
    var obj = obj || window;
    obj.fn = this;
    var newArguments = [...arguments].slice(1);
    var res = obj.fn(...newArguments);
    delete obj.fn;
    return res
}

person.newcall(egg, 1, 2, 3, 4)

Function.prototype.newapply = function (obj) {
    let obj = obj || window;
    obj.fn = this;
    let res;
    if(arguments.length > 1){
        res = obj.fn([...arguments[1]])
    }else{
        res = obj.fn()
    }
    delete obj.fn
    return res
}

Function.prototype.newbind = function(context) {
    if(typeof this !== "function"){
        throw new TypeError("not Funtion!")
    }
    var _this = this;
    var args = [...arguments].slice(1)
    return function fn() {
        if(this instanceof fn){
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args)
    }
}