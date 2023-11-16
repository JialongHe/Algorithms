var connect = function(root) {
    if(!root)   return null

    let queue = [root]
    
    while(queue.length){
        const level = []
        while(queue.length){
            level.push(queue.shift())
        }
        level.push(null)

        for(let i = 0; i < level.length - 1; i++){
            const node = level[i]
            node.next = level[i + 1]
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }

    return root
};