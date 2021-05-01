const fs = require("fs");
const path = require("path");

fs.readFile(path.resolve(__dirname, "../demo.txt"), (err, data) => {
  console.log(err, data.toString());
});

const p = new Promise(function (resolve, reject) {
  fs.readFile(path.resolve(__dirname, "../demo.txt"), (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

module.exports = p;
