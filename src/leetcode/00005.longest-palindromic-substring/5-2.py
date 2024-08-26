class Solution:
    """
    ## P(i,j)

    1. i == j => true
    2. j - i <= 2 => s[i] == s[j]
    3. j -i > 2=> s[i] == s[j] && P(i+1,j-1)
    """

    def longestPalindrome(self, s: str) -> str:
        res = s[0]
        length = len(s)
        arr = [[False for _ in range(length)] for _ in range(length)]
        for i in range(len(s) - 1, -1, -1):
            for j in range(i + 1, len(s)):
                if i == j:
                    arr[i][j] = True
                elif j - i <= 2:
                    arr[i][j] = s[i] == s[j]
                else:
                    arr[i][j] = (s[i] == s[j]) and arr[i + 1][j - 1]
                if arr[i][j] and j - i + 1 > len(res):
                    res = s[i : j + 1]
        return res


if __name__ == "__main__":
    # print(Solution().longestPalindrome("babad"))
    # print(Solution().longestPalindrome("cbbd"))
    print(Solution().longestPalindrome("abcba"))
