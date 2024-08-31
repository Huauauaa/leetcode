import re


class Solution:
    def isMatch(self, s: str, p: str) -> bool:

        return False if re.match(f"^{p}$", s) == None else True


if __name__ == "__main__":
    print(Solution().isMatch("aa", "a"))
    print(Solution().isMatch("aa", "a*"))
