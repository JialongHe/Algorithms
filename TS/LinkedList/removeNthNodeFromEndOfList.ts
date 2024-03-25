// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/?envType=study-plan-v2&envId=top-interview-150

// ListNode
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummyHead: ListNode = new ListNode();
    dummyHead.next = head;
    let endProb: ListNode = dummyHead;
    let prevRemove: ListNode | null = dummyHead;

    for (let i: number = 0; i <= n; i++) {
        endProb = endProb.next!;
    }

    while (endProb) {
        endProb = endProb.next!;
        prevRemove = prevRemove.next!;
    }
    prevRemove.next = prevRemove.next?.next || null;

    return dummyHead.next;
};