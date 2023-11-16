var n = 4;
var m = 4;

arr = [
    [0, 25, 18, 0],
    [0, 0, 0, 28],
    [0, 0, 0, 22],
    [0, 0, 0, 0]
]
let str = "1 4 7.9/8";
var s = 0;
var e = 0;
var time;
for(let i = 0; i < str.length; i++){
    while(str[i] <= "9" && str[i] >= "0"){
        s = s * 10 + parseInt(str[i])
        i++;
    }
    i++;
    while(str[i] <= "9" && str[i] >= "0"){
        e = e * 10 + parseInt(str[i])
        i++;
    }
    i++;
    str = str.slice(i);
}
time = [...str]

var month = 0;
var day = 0;
var hour = 0;
var minTime = 100;

for(let i = 0; i < time.length; i++){
    while(time[i] <= "9" && time[i] >= "0"){
        month = month * 10 + parseInt(time[i])
        i++;
    }
    i++;
    while(time[i] <= "9" && time[i] >= "0"){
        day = day * 10 + parseInt(time[i])
        i++;
    }
    i++;
    while(i < time.length && time[i] <= "9" && time[i] >= "0"){
        hour = hour * 10 + parseInt(time[i])
        i++;
    }
}

let dfs = (cur, end, time) =>{
    for(let i = 0; i < n; i++){
        if(arr[cur][i]){
            if(i == end){
                minTime = Math.min(minTime, time + arr[cur][i]);
                return
            }
            dfs(i, end, time + arr[cur][i])
        }
    }
}
dfs(s - 1, e - 1, 0)

hour += minTime

const calender = {
    1: 31,
    3: 31,
    5: 31,
    7: 31,
    8: 31,
    11: 31,
    2: 30,
    4: 30,
    6: 30,
    9: 30,
    12: 30,
    2: 29,
}
if(hour >= 24){
    days = Math.floor(hour / 24);
    hour = hour % 24;
    day += days;
    while(day > calender[month]){
        day -= calender[month];
        month++;
    }
}
console.log("" + month + "." + day + "/" + hour)