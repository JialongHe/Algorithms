function People(name){
    //属性
    this.name = name || "Annie"
    //实例方法
    this.sleep=function(){
      console.log(this.name + '正在睡觉')
    }
}
  //原型方法
People.prototype.eat = function(food){
    console.log(this.name + '正在吃：' + food);
}

/*
    1 第一种
    父类实例作原型

    1,不能传参
*/
function Woman(){
}
Woman.prototype = new People();
Woman.name = "alice"
Woman.prototype.eat = function(){
    console.log(1)
}
console.log(Woman.prototype)

/*
    2,比较经典
    可以传参
    不能继承原型对象的属性方法
*/
function Woman(name){
    People.call(this); //继承　
    this.name = name || "lala"
}
let wm = new Woman()
console.log(Woman.prototype)
/*
    寄生 最好的继承
*/
function People(name, age) {
    this.name = name || 'test'
    this.age = age || 25
}

People.prototype.eat = function() {
    return this.name + "eat"
}

function Woman(name, age) {
    People.call(this, name, age)
}
let Super = function() {}
Super.prototype = People.prototype
Woman.prototype = new Super()
Woman.prototype.constructor = Woman

/*
    ES6
*/
function Animal(name){
    this.name = name || "tom";
    this.catch = function(){
        console.log(this.name + "catch mouse");
    }
}

Animal.prototype.catch = function(){
}

class Animal{
    constructor(name = "cat", age = 3){
        this.name = name;
        this.age = age;
    }
    eat = () => {
        console.log("cat")
    }
}
class tom extends Animal{
    constructor(name = "tom", age = 1){
        super(name, age)
    }
    eat = () =>{
        super().eat
    }
}