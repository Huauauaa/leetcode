const fs = require("fs");
const path = require("path");

fs.readFile(__dirname + "/sort.js", (err, data) => {
  console.log(err, data.toString());
});

const p = new Promise(function (resolve, reject) {
  fs.readFile(__dirname + "/sort.js", (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

p.then(
  function (value) {
    console.log(value.toString());
  },
  function (err) {
    console.error(err);
  }
);
