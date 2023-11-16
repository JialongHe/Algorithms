function isEmpty(obj){
    for(let i in Object.keys(obj)){
        return false
    }
    return true
}