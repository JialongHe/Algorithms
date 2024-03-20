// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/description/?envType=study-plan-v2&envId=top-interview-150

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Fast Slow Pointers
function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next || !head.next.next) return false;

    let [slow, fast] = [head.next, head.next.next];

    while (fast && slow && fast.next && fast.next.next && slow.next) {
        if (fast === slow)  return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return false;
};