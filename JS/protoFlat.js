Array.prototype.flt = function(){
    let arr = this,
        res = [];
    for(const item of arr){
        if(Array.isArray(item)){
            res.push(...item.flt())
        }else{
            res.push(item)
        }
    }
    return res
}

console.log([1,[2,3],[4,[5,6]]].flt())