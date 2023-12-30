function findClosestElements(arr: number[], k: number, x: number): number[] {
    let low: number = 0;
    let high: number = arr.length - 1;

    while (high - low >= k) {
        if (Math.abs(arr[low] - x) > Math.abs(arr[high] - x)) {
            low++;
        } else {
            high--;
        }
    }

    let res: Array<number> = new Array();
    for (let i = low; i <= high; i++) {
        res.push(arr[i]);
    }
    return res;
};

console.log(findClosestElements([1,2,3,4,5], 4, 3));