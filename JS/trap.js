var trap = function(height) {
    let left = 0,
        right = height.length - 1;
    let res = 0;
    let lm = height[left], rm = height[right];

    while(left < right){
        if(height[left] < height[right]){
            left++;
            if(lm < height[left]){
                lm = height[left];
            }else{
                res += lm - height[left];
            }
        }else{
            right--;
            if(rm < height[right]){
                rm = height[right];
            }else{
                res += rm - height[right];
            }
        }
    }
    return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))