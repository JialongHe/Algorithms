var p1  = /at/g
var p2 = /[bc]at/gi
var p3 = /.at/i
var p4 = /\.at/gi

var p = /^([A-Za-z0-9_\-])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

console.log(p.test("1501160961@163.com"))

var newP = /^([A-Za-z0-9_\-])+\@([q])+\.([A-Za-z]){2,4}$/
console.log(newP.test("1501160961@qq.com"))