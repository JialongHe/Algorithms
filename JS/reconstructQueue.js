var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if(a[0] == b[0]){
            return a[1] - b[1]
        }else{
            return b[0] - a[0]
        }
    })

    people.map((item, index) => {
        people.splice(index, 1)
        people.splice(item[1], 0, item)
    })

    return people
};

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]));