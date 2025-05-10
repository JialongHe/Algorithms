class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        dic = {}
        for i, num in enumerate(nums):
            compliment = target - num
            if compliment in dic:
                return [dic[compliment], i]
            dic[num] = i
        return None