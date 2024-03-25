// 146. LRU Cache
// https://leetcode.com/problems/lru-cache/description/?envType=study-plan-v2&envId=top-interview-150

// Hashmap
class LRUCache2 {
    private capacity: number;
    private cache: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map<number, number>();
    }

    get(key: number): number {
        let res: number = -1;
        if (this.cache.has(key)) {
            res = this.cache.get(key)!;

            this.cache.delete(key);
            this.cache.set(key, res);
        }
        return res;
    }

    put(key: number, value: number): void {  
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}

// Doubly-linked list
// TODO: https://leetcode.com/problems/lru-cache/solutions/2635121/typescript-solution-using-double-linked-list-and-hash-table-with-super-detailed-explanation/?envType=study-plan-v2&envId=top-interview-150
class LRUCache {
    constructor(capacity: number) {
    }

    get(key: number): number {
        return -1;
    }

    put(key: number, value: number): void {
    }
}