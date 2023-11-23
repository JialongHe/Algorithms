function containsDuplicate(nums: number[]): boolean {
    let map: Map<number, number> = new Map<number, number>();
    for (let i: number = 0; i < nums.length; i++) {
        const val: number | undefined = map.get(nums[i]);
        if (val !== undefined) {
            return true
        } else {
            map.set(nums[i], 1)
        }
    }
    return false
};