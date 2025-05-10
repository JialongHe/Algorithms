class Solution(object):
    def largestRectangleArea(self, heights):
        """
        :type heights: List[int]
        :rtype: int
        """
        # max_area = 0
        # for i, height in enumerate(heights):
        #     min_height = height
        #     for j in range(i, -1, -1):
        #         min_height = min(min_height, heights[j])
        #         max_area = max(max_area, min_height * (i - j + 1))
        # return max_area
        stack = []
        max_area = 0
        for i, height in enumerate(heights):
            while stack != [] and height < heights[stack[-1]]:
                h = heights[stack.pop()]
                w = i if stack == [] else i - stack[-1] - 1
                max_area = max(max_area, h * w)
            stack.append(i)
        while stack != []:
            h = heights[stack.pop()]
            w = len(heights) if stack == [] else len(heights) - stack[-1] - 1
            max_area = max(max_area, h * w)
        return max_area