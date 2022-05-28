document.querySelector(".middle").addEventListener(
  "click",
  () => {
    console.log(1);
  },
  {
    capture: false,
  },
);
