class Solution(object):
    def trap(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        n = len(height)
        left = [0] * n
        right = [0] * n
        res = 0
        for i in range(1, n):
            left[i] = max(left[i - 1], height[i - 1])
        for i in range(n - 2, -1, -1):
            right[i] = max(right[i + 1], height[i + 1])
        for i in range(1, n - 1):
            h = min(left[i], right[i])
            if h > height[i]:
                res += h - height[i]
        return res