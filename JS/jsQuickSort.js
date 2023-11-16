var quickSort = (arr) =>{
    if(arr.length < 2){
        return arr
    }
    const left = [], right = []
    const pivot = arr.splice(Math.floor(arr.length / 2), 1)[0];

    arr.forEach(item => {
        if(item < pivot){
            left.push(item)
        }else{
            right.push(item)
        }
    });
    return quickSort(left).concat(pivot, quickSort(right))
}

console.log(quickSort([10,70,25,31,28,99,1,3]))