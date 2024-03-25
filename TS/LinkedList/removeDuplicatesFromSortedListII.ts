// 82. Remove Duplicates from Sorted List II
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/?envType=study-plan-v2&envId=top-interview-150

// ListNode
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head)  return null;

    let dummyHead: ListNode = new ListNode();
    dummyHead.next = head;
    let preCur: ListNode = dummyHead;
    let cur: ListNode | null = head;

    while (cur) {
        if (cur.val === cur.next?.val) {
            while (cur.val === cur.next?.val) {
                cur = cur.next;
            }
            while (preCur.next !== cur.next) {
                preCur.next = preCur.next?.next || null;
            }
        } else {
            preCur = preCur.next!;
        }
        cur = cur.next;
    }

    return dummyHead.next;
};