let str = [1, 2, 3, 4];
let count = 0;

function arrange(s) {
  for (let i = 0, length = str.length; i < length; i++) {
    if (s.length === length - 1) {
      if (s.indexOf(str[i]) < 0) {
        count++;
        console.log("" + s + str[i]);
      }
      continue;
    }
    if (s.indexOf(str[i]) < 0) {
      arrange(s + str[i]);
    }
  }
}

arrange("");
