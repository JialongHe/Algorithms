function majorityElement(nums: number[]): number[] {
    let map: Map<number, number> = new Map<number, number>();
    const threshHold: number = nums.length / 3;
    let res: number[] = [];

    for (let i: number = 0; i < nums.length; i++) {
        let countVal: number | undefined = map.get(nums[i])
        if (countVal === undefined) {
            countVal = 1;
            map.set(nums[i], countVal)
        } else {
            map.set(nums[i], ++countVal!)
        }
        // console.log(`i: ${i}, numsi: ${nums[i]}, res:${res}, indexOf: ${res.indexOf(nums[i])}, map: ${map.keys()}`)
        if (countVal > threshHold && res.indexOf(nums[i]) < 0) {
            res.push(nums[i]);
        }
    }
    return res;
};

console.log(majorityElement([2,1,1,3,1,4,5,6]))