var permute = function(nums) {
    const res = []
    const visit = {}
    const len = nums.length;

    let dfs = (temp) =>{
        if(temp.length == len){
            res.push([...temp]);
            return
        }
        for(let i = 0; i < len; i++){
            if(!visit[i]){
                visit[i] = true;
                temp.push(nums[i]);
                dfs(temp)
                temp.pop()
                visit[i] = false;
            }
        }
    }
    dfs([])
    return res;
};

console.log(permute([1,2,3]))