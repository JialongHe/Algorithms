// 92. Reverse Linked List II
// https://leetcode.com/problems/reverse-linked-list-ii/description/?envType=study-plan-v2&envId=top-interview-150

// Stack
function reverseBetween2(head: ListNode | null, left: number, right: number): ListNode | null {
    if (left === right)  
        return head;

    let dummyHead: ListNode = new ListNode();
    dummyHead.next = head;
    let cur: ListNode | null = dummyHead;
    let rotateHead: ListNode | null = null;
    let rotateTail: ListNode | null = null;

    let stack: ListNode[] = [];
    for (let i: number = 0; i < left; i++) {
        rotateHead = cur;
        cur = cur.next!;
    }

    for (let i: number = 0; i <= right - left; i++) {
        stack.push(cur);
        cur = cur.next!;
    }
    rotateTail = cur;

    cur = rotateHead;
    while (stack.length > 0) {
        cur!.next = stack.pop()!;
        cur = cur!.next;
    }
    cur!.next = rotateTail;

    return dummyHead.next;
};

// improved
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (left === right) return head;

    let dummyHead: ListNode = new ListNode();
    dummyHead.next = head;
    let leftPrev: ListNode = dummyHead;
    let cur: ListNode | null = head;

    let counter: number = 1;
    while (counter < left) {
        leftPrev = cur!;
        cur = cur!.next!;
        counter++;
    }

    let tail: ListNode = cur!;
    let rightAfter: ListNode | null = null;
    while (counter < right) {
        const next: ListNode | null = cur!.next;
        leftPrev.next = next;
        cur!.next = rightAfter;
        rightAfter = cur;
        cur = next;
        counter++;
    }

    tail.next = cur!.next;
    cur!.next = rightAfter;

    return dummyHead.next;
};