class Solution:
    def __init__(self):
        self.res = ""

    def longestPalindrome(self, s: str) -> str:
        self.res = s[0]

        for i in range(len(s)):
            self.work(s, i, i)
            self.work(s, i, i + 1)
        return self.res

    def work(self, s, left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        if right - left - 1 > len(self.res):
            self.res = s[left + 1 : right]


if __name__ == "__main__":
    print(Solution().longestPalindrome("babad"))
    print(Solution().longestPalindrome("cbbd"))
