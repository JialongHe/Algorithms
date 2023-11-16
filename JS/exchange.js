var exchange = function(nums) {
    let i = 0, j = nums.length - 1;

    while(i < j){
        while(i < j && (nums[i] % 2)){
            i++;
        }
        while(i < j && !(nums[j] % 2)){
            j--;
        }
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    return nums;
};