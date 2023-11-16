var combinationSum3 = function(k, n) {
    const res = []
    const map = new Map();
    for(let i = 1; i < 10; i++){
        map.set(i, 0)
    }

    let dfs = (index, count, target, temp) =>{
        if(count === k){
            if(!target){
                res.push(temp)
            }
            return 
        }
        for(let i = index; i < 10; i++){
            if(i > target){
                return
            }
            if(map.get(i)){
                continue
            }
            temp.push(i);
            map.set(i, 1)
            dfs(i + 1, count + 1, target - i, temp.slice(0));
            map.set(i, 0)
            temp.pop(i);
        }
    }

    dfs(1, 0, n, [].slice(0));
    return res;
};

console.log(combinationSum3(3, 7))