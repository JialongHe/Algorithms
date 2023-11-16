var mySqrt = function(x){
    if(x < 2){
        return x
    }
    let left = 1,
        right = x >> 1
    
    while(left <= right){
        let mid = (left + right) >> 1;
        let res = mid * mid

        if(res == x){
            return mid
        }else if(res < x){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }

    return right
}