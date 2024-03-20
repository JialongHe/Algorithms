// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/description/?envType=study-plan-v2&envId=top-interview-150

// List
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head: ListNode = new ListNode();
    let cur: ListNode = head;
    let carry: number = 0;

    while (l1 || l2) {
        let x: number = l1?.val || 0;
        let y: number = l2?.val || 0;
        let sum: number = x + y + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;

        cur.next = new ListNode(sum);
        cur = cur.next;
        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }

    if (carry > 0)
        cur.next = new ListNode(carry);

    return head.next;
};