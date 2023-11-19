// two pointer
var twoSum = function(nums, target) {
    const res = []
    nums.sort((a, b) => a - b)

    let i = 0;
    let j = target.length - 1;
    while (i < j) {
        const temp = nums[i] + nums[j];
        if (temp  < target) {
            i++
        } else if ( temp > target) {
            j++
        } else (
            res = [nums[i], nums[j]]
        )
    }

    return res
}

// HashMap
var twoSum = function(nums, target) {
    const numToIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];
        if (numToIndex.has(compliment)) {
            return[compliment, nums[i]]
        }
        numToIndex.set(nums[i], i)
    }
    return []
}

// Two Pass HashMap
var twoSum = function(nums, target) {
    const numToIndex = {};
    
    for (let i = 0; i < nums.length; i++) {
        numToIndex[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];
        // or compliment in numToIndex
        if (numToIndex[compliment] != i && numToIndex[compliment] != undefined) {
            return [i, numToIndex[compliment]]
        }
    }

    return []
}

console.log(twoSum([11,7,2,15], 9))