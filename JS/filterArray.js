function arrayRepeat(arr){
    return [...new Set(arr)]
}

function arrayRepeat(arr){
    return arr.filter((item, index, arr) => {
        return arr.indexOf(item) === index;
    })
}

function arrayRepeat(arr){
    return arr.reduce((prev, cur) => prev.includes(cur) ? prev: [...prev, cur], [])
}

var arr = [1,1, 2, 2, true, true, 15, 15, "s", "s"]

console.log(arrayRepeat(arr))