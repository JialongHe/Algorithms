class Solution(object):
    def minSubArrayLen(self, target, nums):
        """
        :type target: int
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        left, right = 0, 0
        sum = 0
        min_len = n + 1
        while right < n:
            sum += nums[right]
            while sum >= target:
                sum -= nums[left]
                left += 1
            min_len = min(min_len, right - left + 1)
            right += 1
        return 0 if min_len == n + 1 else min_len
        