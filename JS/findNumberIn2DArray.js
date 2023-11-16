var findNumberIn2DArray = function(matrix, target) {
    const row = matrix.length
    if(row  < 1){
        return false
    }
    const col = matrix[0].length
    if(col < 1){
        return false
    }
    let i = row - 1;
    let j = 0;
    
    while(i >= 0 && j < col){
        if(matrix[i][j] === target){
            return true
        }else if(matrix[i][j] > target){
            i -= 1
        }else{
            j += 1;
        }
    }
    return false
};

console.log(findNumberIn2DArray([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ], 20))