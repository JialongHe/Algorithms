function flt(arr) {
  /*
    方法一：
      循环递归
  */
  /*
  arr.map((item, index, arr) => {
    if(Array.isArray(item)){
      res = res.concat(flt(item))
    }else{
      res.push(item)
    }
  })
  */
  /*
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flt(cur) : cur)
  }, [])
  */
  /*
    方法二：
      巧用some + ...
  */
 /*
  while(arr.some(item => Array.isArray(item))){
    arr = [].concat(...arr)
  }
  return arr
  */
  /*
    方法三:
    原生方法nb！
    join() toString()效果相同
 */
  return arr.join(",").split(",").map(item => parseInt(item))
}

console.log(flt([1,[2,[3,4,5]], 6]))
