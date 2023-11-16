let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let res = []
let len = arr.length;

/*
    1, 鱼妈随机法
for(let i = 0; i < len; i++){
    let k = Math.floor(Math.random()*arr.length)
    res.push(arr[k])
    arr.splice(k, 1)
}
console.log(res)
*/

/*
    2, 克努斯随机法
*/
/*
for(let i = len - 1; i >= 0; i--){
    let k = Math.floor(Math.random()*10)
    let temp = arr[k]
    arr[k] = arr[i]
    arr[i] = temp
}
console.log(arr)
*/
/*
    3, Inside out
*/

for(let i = 0; i < len; i++){
    let k = Math.floor(Math.random()*(i+1))
    let temp = arr[k]
    arr[k] = arr[i]
    arr[i] = temp
}
console.log(arr)