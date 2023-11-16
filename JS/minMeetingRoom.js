var minMeetingRooms = function(intervals) {
    if(!intervals.length)   return 0
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    console.log(intervals)
    let count = 1;
    let stackMin = [intervals[0][1]]
    for(let i = 1; i < intervals.length; i++){
        let min = Infinity
        let room = 0
        for(let j = 0; j < stackMin.length; j++){
            if(stackMin[j] < min){
                min = stackMin[j];
                room = j
            }
        }
        if(intervals[i][0] < min){
            count++;
            stackMin[stackMin.length] = intervals[i][1];
        }else{
            stackMin[room] = intervals[i][1]
        }
    }
    return count
};