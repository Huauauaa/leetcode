export default function () {
  window.requestAnimationFrame((...args) => {
    console.log("called", args);
  });

  const button = document.createElement("button");

  let width = 200;

  button.innerText = "Button";

  const div = document.createElement("DIV");

  div.style.width = width + "px";
  div.style.height = "200px";
  div.style.backgroundColor = "pink";

  const onClick = () => {
    console.log("click");
    width += 10;
    div.style.width = width + "px";
  };

  button.addEventListener("click", onClick);

  document.body.appendChild(div);
  document.body.appendChild(button);
}
