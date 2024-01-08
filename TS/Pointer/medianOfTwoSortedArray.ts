/// https://leetcode.com/problems/median-of-two-sorted-arrays/description/
/// 4. Median of Two Sorted Arrays

// Brute force O(n)
function findMedianSortedArrays2(nums1: number[], nums2: number[]): number {
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);

    if (nums1.length % 2 === 1) {
        return nums1[Math.floor(nums1.length / 2)];
    } else {
        return (nums1[nums1.length / 2] + nums1[nums1.length / 2 - 1]) / 2;
    }
};

// Two Pointer
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let n: number = nums1.length;
    let m: number = nums2.length;
    let i: number = 0;
    let j: number = 0;
    let m1: number = 0;
    let m2: number = 0;


    for (let count: number = 0; count <= (n + m) >> 1; count++) {
        m2 = m1;
        if (i < n && j < m) {
            if (nums1[i] > nums2[j]) {
                m1 = nums2[j++];
            } else {
                m1 = nums1[i++];
            }
        } else if (i < n) {
            m1 = nums1[i++];
        } else {
            m1 = nums2[j++];
        }
    }
    
    if ((n + m) % 2 === 1) {
        return m1;
    } else {
        return (m1 + m2) / 2
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([3], [-2, -1]));