class Solution(object):
    def rotateRight(self, head, k):
        """
        :type head: Optional[ListNode]
        :type k: int
        :rtype: Optional[ListNode]
        """
        if not head:
            return None
        if not head.next:
            return head
        n = 1
        cur = head
        while cur.next:
            cur = cur.next
            n += 1
        cur.next = head
        k = k % n
        for _ in range(n - k):
            cur = cur.next
        head = cur.next
        cur.next = None
        return head