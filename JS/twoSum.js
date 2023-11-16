var twoSum = function(nums, target) {
    const res = []
    let start = 0,
        end = nums.length - 1;
    while(start < end){
        const temp = nums[start] + nums[end];
        if(temp > target){
            end--;
        }else if(temp < target){
            start++;
        }else{
            break;
        }
    }
    res.push(nums[start])
    res.push(nums[end])
    return  res
};