// native
var convertToBase7 = function(num) {
    return Number(num).toString(7)
};
console.log(convertToBase7(-7))

// step by step
// and, from 2 to 16
Number.prototype.transformBase = function(base) {
    let num = this;
    let res = [];
    let prefix;
    if (num < 0) {
        prefix = "-";
        num = -num;
    }

    let map = ['A', 'B', 'C', 'D', 'E']
    while (num > 0) {
        let temp = num % base;
        num = Math.floor(num / base);
        res.push(temp > 9 ? map[temp - 10] : temp.toString())
    }
    return `${prefix}${res.reverse().join("")}`
}

console.log(Number(-7).transformBase(7))