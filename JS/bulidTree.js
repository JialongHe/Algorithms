var buildTree = function(preorder, inorder) {
    if(!preorder.length){
        return null
    }
    let node = new TreeNode(preorder[0])
    for(let index = 0; index < inorder.length; index++){
        if(inorder[index] == node.val){
            node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
            node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
            break;
        }
    }
    return node
};

var buildTree = function(inorder, postorder) {
    if(!postorder.length){
        return null
    }
    let node = new TreeNode(postorder[length - 1])
    for(let index = 0; index < inorder.length; index++){
        if(inorder[index] == node.val){
            node.left = buildTree(inorder.slice(0, index), postorder(0, index));
            node.right = buildTree(inorder.slice(index + 1), postorder(index, postorder.length - 1));
            break;
        }
    }
    return node
};