// 86. Partition List
// https://leetcode.com/problems/partition-list/description/?envType=study-plan-v2&envId=top-interview-150

// ListNode
function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head)  return null;

    let smallHead: ListNode = new ListNode(), bigHead: ListNode = new ListNode();
    let small: ListNode = smallHead, big: ListNode = bigHead;
    let cur: ListNode | null = head;

    while (cur) {
        if (cur.val < x) {
            small.next = cur;
            small = small.next;
        } else {
            big.next = cur;
            big = big.next;
        }
        cur = cur.next;
    }
    big.next = null;
    small.next = bigHead.next;

    return smallHead.next;
};