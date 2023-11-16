var levelOrder = function(root) {
    if(!root){
        return []
    }
    
    let res = [];
    let queue = [root];

    while(queue.length){
        const tmpLen = queue.length;
        const temp = [];

        for(let i = 0; i < tmpLen; i++){
            const node = queue.shift();
            if(res.length % 2){
                temp.unshift(node.val)
            }else{
                temp.push(node.val)
            }
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        res.push(temp)
    }
    return res
};