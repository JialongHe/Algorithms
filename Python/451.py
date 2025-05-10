class Solution:
    def frequencySort(self, s: str) -> str:
        dict = {}
        for s in s:
            dict[s] = dict.get(s, 0) + 1
        
        dict = sorted(dict.items(), key=lambda x: x[1], reverse=True)
        return "".join([k*v for k, v in dict])
        

a = Solution()
a.frequencySort("tree")