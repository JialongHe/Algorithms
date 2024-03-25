// 25. Reverse Nodes in k-Group
// https://leetcode.com/problems/reverse-nodes-in-k-group/description/?envType=study-plan-v2&envId=top-interview-150

// ListNode
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head)  return null;
    if (k === 1)    return head;

    let dummyHead: ListNode = new ListNode();
    dummyHead.next = head;
    let leftPrev: ListNode = dummyHead;
    let cur: ListNode | null = head;
    let endProb: ListNode | null = dummyHead;

    for (let i: number = 0; i < k && endProb; i++) {
        endProb = endProb.next;
    }

    for (let start: number = 1, end: number = k; endProb; end += k) {
        let rightAfter: ListNode | null = null;
        let tail: ListNode = cur!;
        while (start < end && cur) {
            leftPrev.next = cur.next;
            cur.next = rightAfter;
            rightAfter = cur;
            cur = leftPrev.next;
            start++;
            endProb = endProb?.next || null;
        }
        if (!cur)
            break;
        
        leftPrev = tail;
        tail.next = cur.next;
        cur.next = rightAfter;
        cur = tail.next;
        start++;
        endProb = endProb?.next || null;
    }

    return dummyHead.next;
};