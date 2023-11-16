var findMode = function(root) {
    let max = 0, res = [], store = {}
    if(!root){
        return null
    }

    let dfs = (node) =>{
        store[node.val] = (store[node.val] || 0) + 1
        if(store[node.val] >= max){
            store[node.val] > max && (res.length = 0)
            max = store[node.val]
            res.push(node.val)
        }
        node.left && dfs(node.left) || node.right && dfs(node.right)
    }
    dfs(root)
    return  res
};