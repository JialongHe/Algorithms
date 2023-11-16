var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    let index = -1;

    for (let item of intervals){
        if (index == -1 || item[0] > res[index][1]) {
            res.push(item);
            index++;
        }else{
            res[index][1] = Math.max(res[index][1], item[1]);
        }
    }
    return res;
}