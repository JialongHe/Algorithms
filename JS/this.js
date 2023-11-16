function Lover(name) {
    this.name = 12;
    var self = this;
    this.say = function(){
        console.log(self)
        console.log(this.name)
    }
}

var xiaohong  = new Lover(50)
var temp = xiaohong.say;

//容易与作用域混淆
this.count = 10
let count = 10

var func1 = function(){
    this.count = 1
    console.log(this.count)
    console.log("作用域", count)
}
console.log(this);
func1()


var func2 = function(){
    this.count = 30
    this.say = function() {
        console.log("func2", this.count);
    }
}

var obj1 = {
    count: 1,
    func: function () {
        console.log("obj1", this.count)
    }
}

var obj2 = {
    count:2,
    func: function () {
        console.log("obj2", this.count)
    }
}
//1，对象内部 隐式绑定
obj1.func()

//2 硬绑定
obj1.func.call(obj2)

//3 构造函数绑定
let f2 = new func2();
f2.say()
