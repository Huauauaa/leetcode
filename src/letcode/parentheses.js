const map = new Map();

map.set(")", "(");
map.set("]", "[");
map.set("}", "{");

var isValid = function (s) {
  const length = s.length;
  if (length % 2 === 1) return false;
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    switch (item) {
      case "(":
      case "[":
      case "{":
        arr.push(item);
        break;
      case ")":
      case "]":
      case "}":
        if (arr.pop() !== map.get(item)) return false;
        break;
      default:
        throw new Error("unknown");
    }
  }
  return !arr.length;
};

console.log(isValid("([])"));
