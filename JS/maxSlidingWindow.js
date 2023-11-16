var maxSlidingWindow = function (nums, k) {
    const deque = []
    const result = []
    
    for (let i = 0; i < nums.length; i++) {
        while(i - deque[0] >= k){
            deque.shift()
        }
        while(nums[i] > nums[deque[deque.length - 1]]){
            deque.pop()
        }
        deque.push(i)
        if(i >= k - 1){
            result.push(nums[deque[0]])
        }
    }
    return result
}