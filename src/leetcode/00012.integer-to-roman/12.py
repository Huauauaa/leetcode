def deal(n, res=[]):
    d = {1000: "M", 500: "D", 100: "C", 50: "L", 10: "X", 5: "V", 1: "I"}
    for k in d:
        if n >= k:
            res.append(d[k])
            return deal(n - k, res)
    return res


def deal_4_9(n):
    d = {
        4: "IV",
        9: "IX",
        40: "XL",
        90: "XC",
        400: "CD",
        900: "CM",
    }
    return d[n]


class Solution:
    """
    https://leetcode.cn/problems/integer-to-roman/description/
    """

    def intToRoman(self, num: int) -> str:
        carry = 10 ** (len(str(num)) - 1)
        res = []
        while num > 0:
            n = num // carry
            current = n * carry
            num = num - current

            if n in [4, 9]:
                res.append(deal_4_9(current))
            else:
                res += deal(current, [])
            carry = carry // 10
        return "".join([str(i) for i in res])


if __name__ == "__main__":
    res = Solution().intToRoman(1)
    print(res)
