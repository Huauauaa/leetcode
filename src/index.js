import p from "./demo/request";

// p.then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.error(err);
//   }
// );

(async () => {
  const result = await p;
  console.log(result);
})();
