// 215. Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/?envType=study-plan-v2&envId=top-interview-150

// With Sorting
function findKthLargest2(nums: number[], k: number): number {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};

// Heap
function findKthLargest(nums: number[], k: number): number {
    let buildMinHeap = function(heap: number[]) {
        for (let i: number = Math.floor(heap.length / 2); i >= 0; i--) {
            heapify(heap, i);
        }
    };

    let heapify = function(heap: number[], i: number) {
        let l: number = heap.length;
        let min: number = i;
        const left: number = 2 * i + 1;
        const right: number = 2 * i + 2;
        if (left < l && heap[left] < heap[min]) {
            min = left;
        }
        if (right < l && heap[right] < heap[min]) {
            min = right;
        }
        if (min !== i) {
            [heap[i], heap[min]] = [heap[min], heap[i]];
            heapify(heap, min);
        }
    }

    const heap: number[] = nums.slice(0, k);
    buildMinHeap(heap);

    for (let i: number = k; i < nums.length; i++) {
        if (nums[i] > heap[0]) {
            heap[0] = nums[i];
            heapify(heap, 0);
        }
    }

    return heap[0];
};

console.log(findKthLargest2([3,2,1,5,6,4], 2));