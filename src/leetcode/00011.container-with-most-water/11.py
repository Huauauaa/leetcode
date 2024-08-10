from typing import List


class Solution:
    """
    https://leetcode.cn/problems/container-with-most-water/
    """

    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        res = 0
        while left < right:
            area = min(height[left], height[right]) * (right - left)
            res = max(res, area)
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return res


if __name__ == "__main__":
    Solution().maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
