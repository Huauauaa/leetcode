import debounce, { debounce2, debounce3 } from "./js/debounce";

const button = document.createElement("button");

button.innerText = "点击";

let a = 0;

const onClick = (event) => {
  a++;
  console.log(a, event, 3);
};

const debounceClick = debounce3(onClick, 300);
// const debounceClick = debounce(onClick, 1000);
// const debounceClick = debounce2(onClick, 1000);

button.addEventListener("click", debounceClick);

document.body.appendChild(button);
