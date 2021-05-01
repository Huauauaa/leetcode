const p = new Promise(function (resolve, reject) {
  const xhr = new XMLHttpRequest();

  xhr.open("get", "https://api.apiopen.top/getJoke");

  xhr.send();

  xhr.onreadystatechange = function () {
    console.log(xhr.readyState, xhr.status);

    if (xhr.readyState === 4) {
      console.log(xhr.status);
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.status);
      }
    }
  };
});

export default p;
