var subsets = function(nums) {
    let res = [];
    let len = nums.length;

    let dfs = (ind, temp) => {
        if(ind < len){
            dfs(ind + 1, [...temp])
            temp.push(nums[ind])
            res.push([...temp])
            dfs(ind + 1, [...temp])
        }
        return
    }
    dfs(0, [])
    res.push([])
    return res
};

console.log(subsets([1, 2, 3]))