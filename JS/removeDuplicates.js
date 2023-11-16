var removeDuplicates = function(nums) {
    let count = 1
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] == nums[i + 1]){
            count++;
            if(count > 2){
                nums.splice(i, 1)
                i--;
                count--;
            }
        }else{
            count = 1
        }
    }
    
    return nums.length
};