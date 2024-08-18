from typing import List


# class Solution:
#     def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
#         res = nums1[::]

#         def inset(t):
#             left = 0
#             right = len(res) - 1
#             while left <= right:
#                 mid = (left + right) >> 1
#                 if res[mid] > t:
#                     right = mid - 1
#                 else:
#                     left = mid + 1
#             res.insert(left, t)

#         for i in nums2:
#             inset(i)


#         length = len(res)
#         if length % 2 == 0:
#             return (res[length // 2 - 1] + res[length // 2]) / 2
#         else:
#             return res[length // 2]
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        res = []
        while nums1 and nums2:
            if nums1[0] >= nums2[0]:
                res.append(nums2.pop(0))
            else:
                res.append(nums1.pop(0))
        res += nums1 + nums2

        mid = len(res) // 2
        return (res[mid] + res[~mid]) / 2


if __name__ == "__main__":
    res = Solution().findMedianSortedArrays([1, 2], [3, 4])
    print(res)
