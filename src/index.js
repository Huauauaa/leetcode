import debounce, { debounce2, debounce3 } from "./js/debounce";
import { throttle1, throttle2 } from "./js/throttle";

const button = document.createElement("button");

button.innerText = "点击";

let a = 0;

const onClick = (event) => {
  a++;
  console.log(a, event, "throttle2");
};

// const debounceClick = onClick;
const debounceClick = throttle2(onClick, 1000);
// const debounceClick = throttle1(onClick, 1000);
// const debounceClick = debounce3(onClick, 300);
// const debounceClick = debounce(onClick, 1000);
// const debounceClick = debounce2(onClick, 1000);

button.addEventListener("click", debounceClick);

setInterval(() => {
  console.log("interval");
}, 1e3);

document.body.appendChild(button);
