var majorityElement = function(nums) {
    let count = 0,
        res = 0;
    for(const num of nums) {
        if(count === 0){
            res = num;
        }
        if(num === res){
            count++;
        }else{
            count--;
        }
    }
    return res;
};