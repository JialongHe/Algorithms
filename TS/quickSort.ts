function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const leftArr: number[] = [];
    const rightArr: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Example usage:
const unsortedArray = [5, 3, 7, 2, 9, 1, 6];
const sortedArray = quickSort(unsortedArray);
console.log("Sorted array:", sortedArray);