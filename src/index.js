import demo, { getData } from "./demo/interval";

demo();
// getData();

let count = 0;
const id = setInterval(() => {
  console.log(Date.now());
  count++;
  if (count === 10) {
    clearInterval(id);
  }
}, 1e3);
