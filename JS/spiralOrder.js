var spiralOrder = function(matrix) {
    let res = [];
    if(matrix.length < 1 || matrix[0].length < 1){
        return res
    }

    const rotateMatrix = (matrix) =>{
        const newMatrix = [],
            col = matrix[0].length,
            row = matrix.length;
        for(let i = col - 1; i >= 0; i--){
            const temp = []
            for(let j = 0; j < row; j++){
                temp.push(matrix[j][i])
            }
            newMatrix.push(temp);
        } 
        return newMatrix;
    }

    const row = matrix.shift();
    res = res.concat(row);
    while(matrix.length){
        matrix = rotateMatrix(matrix);
        res = res.concat(matrix.shift())
    }

    return res;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))