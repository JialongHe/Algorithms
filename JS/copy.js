//shallow copy
//Object.assign
var obj = {
    a: 1,
    b: 2
}
var obj1 = {}
Object.assign(obj1, obj);
obj1.a = 3
console.log(obj, obj1)
// = 
let a=[0,1,2,3,4],
    b=a;
console.log(a===b);
a[0]=1;
console.log(a,b);

//deep copy
//缺点-不能复制函数
let arr = [1, 3, {
    username: ' kobe'
}];
let arr4 = JSON.parse(JSON.stringify(arr));
arr4[2].username = 'duncan';
console.log(arr, arr4)
//递归复制
//定义检测数据类型的功能函数
function checkedType(target) {
    return Object.prototype.toString.call(target).slice(8, -1)
}
//实现深度克隆---对象/数组
function clone(target) {
    //判断拷贝的数据类型
    //初始化变量result 成为最终克隆的数据
    let result, targetType = checkedType(target)
    if (targetType === 'object') {
        result = {}
    } else if (targetType === 'Array') {
        result = []
    } else {
        return target
    }
    //遍历目标数据
    for (let i in target) {
        let value = target[i]
        //判断目标结构里的每一值是否存在对象/数组
        if (checkedType(value) === 'Object' ||
            checkedType(value) === 'Array') { //对象/数组里嵌套了对象/数组
            //继续遍历获取到value值
            result[i] = clone(value)
        } else { //获取到value值是基本的数据类型或者是函数。
            result[i] = value;
        }
    }
    return result
}