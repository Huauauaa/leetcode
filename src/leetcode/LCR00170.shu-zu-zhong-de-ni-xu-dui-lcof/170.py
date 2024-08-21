from typing import List


class Solution:
    def reversePairs(self, record: List[int]) -> int:
        """
        https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/description/
        """
        tmp = [0] * len(record)

        def merge_sort(l, r):
            if l >= r:
                return 0
            m = (l + r) >> 1
            res = merge_sort(l, m) + merge_sort(m + 1, r)

            i, j = l, m + 1
            tmp[l : r + 1] = record[l : r + 1]
            for k in range(l, r + 1):
                if i == m + 1:
                    record[k] = tmp[j]
                    j += 1
                elif j == r + 1 or tmp[i] <= tmp[j]:
                    record[k] = tmp[i]
                    i += 1
                else:
                    record[k] = tmp[j]
                    j += 1
                    res += m - i + 1
            return res

        return merge_sort(0, len(record) - 1)


if __name__ == "__main__":
    res = Solution().reversePairs([9, 7, 5, 4, 6])
    print(res)
