class Solution(object):
    def longestValidParentheses(self, s):
        """
        :type s: str
        :rtype: int
        """
        length = 0
        max_len = 0
        stack = [-1]
        for i in range(len(s)):
            c = s[i]
            if c == '(':
                stack.append(i)
            else:
                stack.pop()
                if (stack == []):
                    stack.append(i)
                length = i - stack[-1]
                max_len = max(length, max_len)
        return max_len
