class Solution(object):
    def getSkyline(self, buildings):
        """
        :type buildings: List[List[int]]
        :rtype: List[List[int]]
        """
        points = []
        for l, r, h in buildings:
            points.append((l, -h))
            points.append((r, h))
        points.sort()
        # print(points)
        heap = [0]
        res = []
        pre = 0
        for x, h in points:
            if h < 0:
                heap.append(-h)
                heap.sort()
            else:
                heap.remove(h)
            cur = heap[-1]
            if cur != pre:
                res.append([x, cur])
                pre = cur
        return res

# a = Solution()
# a.getSkyline([[2,9,10],[2,7,15],[5,12,12],[15,20,10],[19,24,8]])
        
