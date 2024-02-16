// 134. Gas Station
// https://leetcode.com/problems/gas-station/description/?envType=study-plan-v2&envId=top-interview-150

// BruteForce, O(n2) -> Time limit Exceeded
function canCompleteCircuit2(gas: number[], cost: number[]): number {
    let tank: number;

    for (let i = 0; i < gas.length; i++) {
        tank = 0;
        // console.log(`i: ${i}, gas: ${gas}, cost: ${cost}`);
        for (let j = 0; j < gas.length; j++) {
            tank += gas[j];
            // console.log(`j: ${j}, tank:${tank}, gasj: ${gas[j]}, costj: ${cost[j]}`)
            if (tank < cost[j]) {
                break;
            } else {
                tank -= cost[j];
                if (j === gas.length - 1) {
                    return i;
                }
            }
        }
        let temp: number = gas.shift()!;
        gas.push(temp);
        temp = cost.shift()!;
        cost.push(temp);
    }

    return -1;
};

// Dynamic Plainning 
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let n: number = gas.length;
    let totoal_surplus: number = 0;
    let surplus: number = 0;
    let start: number = 0;

    for (let i: number = 0; i < n; i++) {
        totoal_surplus += gas[i] - cost[i];
        surplus += gas[i] - cost[i];
        if (surplus < 0) {
            surplus = 0;
            start = i + 1;
        }
    }

    return (totoal_surplus < 0) ? -1 : start;
};

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));
console.log(canCompleteCircuit([2,3,4], [3,4,3]));