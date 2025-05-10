class Solution(object):
    def removeDuplicateLetters(self, s):
        """
        :type s: str
        :rtype: str
        """
        last = {c: i for i, c in enumerate(s)}
        stack = []
        exist = {}
        for i, c in enumerate(s):
            if exist.get(c, 0) > 0:
                continue
            while stack != [] and c < stack[-1] and i < last[c]:
                exist[stack[-1]] = 0
                stack.pop()
            stack.append(c)
            exist[c] = 1
        return ''.join(stack)
            

