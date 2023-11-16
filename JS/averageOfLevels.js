var averageOfLevels = function(root) {
    const res = []
    const queue = [root]

    while(queue.length){
        const len = queue.length;
        let total = 0;

        for(let i = 0; i < len; i++){
            const node = queue.shift();
            total += node.val;
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        total /= len
        res.push(total)
    }

    return res
};