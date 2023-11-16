var maxDepth = function(root) {
    let dfs = (root) => {
        if(root){
            return Math.max(dfs(root.left), dfs(root.right)) + 1;
        }
        return 0;
    }

    return dfs(root)
};