class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l = len(s)
        left = 0
        right = left + 1
        res = 0
        while left < l:
            while right < l and s[right] not in s[left:right]:
                right += 1

            res = max(res, right - left)

            left += 1
            right = left + 1
        return res


if __name__ == "__main__":
    print(Solution().lengthOfLongestSubstring("abcabcbb"))
    print(Solution().lengthOfLongestSubstring("bbbbb"))
    print(Solution().lengthOfLongestSubstring("pwwkew"))
