class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_length = 0
        dict = {}
        start = 0
        for i in range(len(s)):
            temp = dict.get(s[i], 0)
            if temp == 0:
                dict[s[i]] = 1
                max_length = max(max_length, i - start + 1)
            else:
                while dict[s[i]] > 0:
                    dict[s[start]] -= 1
                    start += 1
                dict[s[i]] = 1
        return max_length

a = Solution()
print(a.lengthOfLongestSubstring("pwwkew"))
