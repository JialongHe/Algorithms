// 148. Sort List
// https://leetcode.com/problems/sort-list/description/?envType=study-plan-v2&envId=top-interview-150

// Merge Sort
function sortList(head: ListNode | null): ListNode | null {    
    if (!head || !head.next) {
        return head;
    }
    
    let merge = function (l: ListNode | null, r: ListNode | null): ListNode | null{
        if (!l) {
            return r;
        }
        if (!r) {
            return l;
        }

        let dummy: ListNode = new ListNode(0);
        let current: ListNode = dummy;
        while (l && r) {
            if (l.val <= r.val) {
                current.next = l;
                l = l.next;
            } else {
                current.next = r;
                r = r.next;
            }
            current = current.next;
        }

        current.next = l || r;

        return dummy.next;
    }

    let fast: ListNode | null = head.next;
    let slow: ListNode = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next!;
    }

    let right: ListNode = slow.next!;
    slow.next = null;
    let l: ListNode | null = sortList(head);
    let r: ListNode | null = sortList(right);

    return merge(l, r);
};