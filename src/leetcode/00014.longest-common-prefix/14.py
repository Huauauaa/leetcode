from typing import List


class Solution:
    """
    https://leetcode.cn/problems/longest-common-prefix/description/
    """

    def longestCommonPrefix(self, strs: List[str]) -> str:
        return strs[0][0 : self.f(strs)]

    def f(self, strs: List[str]) -> str:
        i = 0
        try:
            while i < len(strs[0]):
                temp = strs[0][i]
                for s in strs:
                    if temp != s[i]:
                        return i
                i += 1
        except:
            return i
        return i


if __name__ == "__main__":
    # Solution().longestCommonPrefix(["flower", "flow", "flight"])
    # Solution().longestCommonPrefix(["dog", "racecar", "car"])
    # Solution().longestCommonPrefix([""])
    Solution().longestCommonPrefix(["abb", "abc"])
