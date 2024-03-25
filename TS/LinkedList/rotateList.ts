// 61. Rotate List
// https://leetcode.com/problems/rotate-list/description/?envType=study-plan-v2&envId=top-interview-150

// ListNode
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head)  return null;

    let n: number = 0;
    let dummyHead: ListNode = new ListNode();
    dummyHead.next = head;
    let tail: ListNode = dummyHead;
    let cur: ListNode = dummyHead;
    
    while (tail.next) {
        tail = tail.next;
        n++;
    }
    k = k % n;
    if (k === 0)    return dummyHead.next;

    tail = dummyHead;
    for (let i: number = 0; i < k; i++) {
        tail = tail.next!;
    }
    while (tail.next) {
        tail = tail.next;
        cur = cur.next!;
    }
    tail.next = dummyHead.next;
    dummyHead.next = cur.next;
    cur.next = null;

    return dummyHead.next;
};