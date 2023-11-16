var verifyPostorder = function(postorder) {
    const len = postorder.length;
    if(len < 2){
        return true
    }

    const root = postorder[postorder.length - 1];
    let i = 0;
    while(i < len && postorder[i] < root){
        i++;
    }
    const left = postorder.slice(0, i);
    const right = postorder.slice(i, len - 1);
    const res = left.every((item) => item < root) 
            && right.every((item) => item > root)
    if(res){
        return(verifyPostorder(left) && verifyPostorder(right))
    }
    return false
}