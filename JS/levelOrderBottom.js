var levelOrderBottom = function(root) {
    if(!root){
        return [];
    }
    const res = []
    const queue = [root]

    while(queue.length){
        const temp = [];
        const qLen = queue.length;

        for(let i = 0; i < qLen; i++){
            const node = queue.shift();
            temp.push(node.val)
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        res.unshift(temp)
    }
    return res
};