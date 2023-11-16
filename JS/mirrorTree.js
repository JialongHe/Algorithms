var mirrorTree = function(root) {
    const res = null;
    if(root){
        res = new TreeNode(root.val);
        res.left = mirrorTree(root.right);
        res.right = mirrorTree(root.left);
    }
    
    return res;  
};