// 135. Candy
// https://leetcode.com/problems/candy/description/?envType=study-plan-v2&envId=top-interview-150

// Two Pass
function candy(ratings: number[]): number {
    let res: number = 0;
    let candies: number[] = Array(ratings.length).fill(1);
    
    for (let i: number = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // console.log(candies)
    for (let i: number = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i + 1] + 1, candies[i]);
        }
    }

    // console.log(candies)
    candies.forEach(value => {res += value})
    return res;
};

console.log(candy([1,0,2]));
console.log(candy([1,2,2]));
console.log(candy([1,3,2,2,1]));
console.log(candy([1,3,4,5,2]));
console.log(candy([29,51,87,87,72,12]));
