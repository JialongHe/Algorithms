var minCameraCover = function(root) {
    let res = 0;

    let dfs = (node) => {
        //叶子节点  可以看成下个边界
        if(node == null){
            return 1
        }
        let left = dfs(node.left),
            right = dfs(node.right)
        //如果子两个节点都是边界 此节点未被监视
        if(left == 1 && right == 1){
            return 0
        }
        //如果其中有一个监视器
        if((left + right) >= 3){
            return 1
        }
        res++;
        //下方有未被监控节点 设置监视器
        return 2
    }

    if(dfs(root) == 0) res++;
    return res
};