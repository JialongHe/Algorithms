var threeSum = function(nums) {
    const res = []
    const len = nums.length;
    if(nums == null || len < 3){
        return res
    }
    nums.sort((a, b) => a - b)
    for(let i = 0; i < len; i++){
        if(nums[i] > 0){
            break
        }
        if(i > 0 && nums[i] == nums[i - 1]){
            continue
        }
        let l = i + 1;
        let r = len - 1;
        while(l < r){
            const sum = nums[i] + nums[l] + nums[r]
            if(sum == 0){
                res.push([nums[i], nums[l], nums[r]])
                while(l < r && nums[l] == nums[l + 1]){
                    l++
                }
                while(l < r && nums[r] == nums[r - 1]){
                    r--;
                }
                l++;
                r--;
            }else if(sum > 0){
                r--;
            }else if(sum < 0){
                l++;
            }
        }
    }
    return res
};

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))