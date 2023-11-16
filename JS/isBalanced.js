var isBalanced = function(root) { 
    let dfs = (node) => {
        if(!node) return 0
        let left = dfs(node.left)
        let right = dfs(node.right)
        if(left == -1){
            return -1
        }
        if(right == -1){
            return -1
        }
        if(Math.abs(left - right) <= 1){
            return 1 + Math.max(left, right)
        }else{
            return -1
        }
    }
    if(dfs(root) == -1){
        return false
    }
    return true
};
