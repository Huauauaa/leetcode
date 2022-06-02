function promiseAll(arr) {
  return new Promise((resolve, reject) => {
    if (!arr || arr.length === 0) {
      resolve([]);
      return;
    }
    let count = 0;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then(
        (res) => {
          result[i] = res;
          if (++count === arr.length) {
            resolve(result);
          }
        },
        (err) => {
          reject(err);
          return;
        },
      );
    }
  });
}

const p1 = Promise.resolve(1);
const p2 = Promise.reject(2);

promiseAll([p1, p2]).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  },
);

function promiseRace(arr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        },
      );
    }
  });
}

promiseRace([p2, p1]).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  },
);
