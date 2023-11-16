var solveNQueens = function(n){
  let res = []

  let dfs = (n, tmp, res) => {
    if(tmp.length === n){
      res.push(
        tmp.map(i => {
          let str = Array(n).fill('.')
          str.splice(i, 1, 'Q')
          return str.join('')
        })
      )
      return 
    }
    for(let j = 0; j < n; j++) {
      if(isValid(tmp, j)){
        tmp.push(j)
        
        dfs(n, tmp, res)
        tmp.pop()
      }
    }
  }
  
  let isValid = (tmp, j) => {
    let len = tmp.length
    for(let x = 0; x < len; x++){
      let y = tmp[x]
      if(y === j || x-y === len-j || x+y === len+j){
        return false
      }
    }
    return true
  }

  dfs(n, [], res)
  return res
};

