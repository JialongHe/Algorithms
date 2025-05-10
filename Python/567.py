class Solution(object):
    def checkInclusion(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: bool
        """
        if len(s1) > len(s2):
            return False
        dic = {}
        for c in s1:
            dic[c] = dic.get(c, 0) + 1
        left, right = 0, 0
        count = len(s1)
        while right < len(s2):
            if s2[right] in dic:
                dic[s2[right]] -= 1
                if dic[s2[right]] >= 0:
                    count -= 1
            if right - left + 1 > len(s1):
                if s2[left] in dic:
                    dic[s2[left]] += 1
                    if dic[s2[left]] > 0:
                        count += 1
                left += 1
            if count == 0:
                return True
            right += 1
        return False
