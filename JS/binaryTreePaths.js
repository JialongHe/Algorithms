var binaryTreePaths = function (root) {
  const res = [];
  
  if(!root){
      return res
  }

  const node_queue = [root]
  const queue = [root.val.toString()]

  while(node_queue.length){
    const node = node_queue.shift();
    const str = queue.shift();

    if(!node.left && !node.right){
        res.push(str);
    }else{
        if(node.left){
            node_queue.push(node.left);
            queue.push(str + "->" + node.left.val);
        }
        if(node.right){
            node_queue.push(node.right);
            queue.push(str + "->" + node.right.val)
        }
    }
  }
  return res;
};