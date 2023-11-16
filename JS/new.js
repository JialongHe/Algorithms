function Cat(name){
    this.name = name
}

Cat.prototype.mew = function(){
    console.log(this.name)
}

function _new(constructor, ...args){
    let obj= {};
    obj.__proto__ = constructor.prototype;
    var result = constructor.apply(obj, args)
    return result instanceof Object? result:obj;
}

let cat = _new(Cat, "jess")
cat.mew()