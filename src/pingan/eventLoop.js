export default function eventLoop() {
  setTimeout(() => {
    console.log(2);
  }, 0);

  console.log(1);

  setTimeout(() => {
    console.log(22);
  }, 0);

  const p = new Promise((resolve, reject) => {
    console.log(3);
    setTimeout(() => {
      console.log(55);
      resolve(5);
      console.log(555);
    }, 0);
    console.log(33);
  });

  p.then(
    (value) => {
      console.log(value);
    },
    (reason) => {}
  );
}

// setTimeout: 2 22 55 555 5
// 1 3 33
