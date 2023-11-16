var combine = function(n, k){
    var res = []

    let dfs = (temp, i) =>{
        if(temp.length == k){
            res.push([...temp])
        }else{
            for(; i <= n; i++){
                temp.push(i)
                dfs(temp, i + 1)
                temp.pop()
            }
        }
    }
    dfs([], 1)
    return res
}

console.log(combine(4,2))