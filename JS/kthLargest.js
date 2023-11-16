var kthLargest = function(root, k) {
    let cur = k;
    let res = null;
    let dfs = (root) =>{
        if(root){
            dfs(root.right)
            if(!cur){
                return 
            }
            cur--;
            if(!cur){
                res = root.val;
                return 
            }
            dfs(root.left)
        }
        return null
    }

    dfs(root, k)
    return res
};