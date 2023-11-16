var movingCount = function(m, n, k) {
    let set = new Set()
    set.add('[0, 0]')
    let queue = [[0, 0]]

    checkLegal = (x, y) => {
        if(x >= m || y >= n){
            return false
        }
        let temp = 0
        while(x > 0){
            temp += x % 10;
            x = Math.floor(x / 10)
        }
        while(y > 0){
            temp += y % 10;
            y = Math.floor(y / 10)
        }
        if(temp > k){
            return false
        }
        return true
    }

    while(queue.length){
        const [x, y] = queue.shift();
        
        if(checkLegal(x + 1, y)){
            queue.push([x + 1, y])
            set.add(JSON.stringify([x + 1, y]))
        }
        if(checkLegal(x, y + 1)){
            queue.push([x, y + 1])
            set.add(JSON.stringify([x, y + 1]))
        }
    }
    return set.size
};

console.log(movingCount(3, 2, 17))