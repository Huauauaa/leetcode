export default function () {
  // setTimeout(() => {
  //   console.log(111);
  //   setTimeout(() => {
  //     console.log(222);
  //     setTimeout(() => {
  //       console.log(333);
  //     }, 3e3);
  //   }, 2e3);
  // }, 1e3);

  // optimize
  function common(text, time) {
    setTimeout(() => {
      console.log(text);
      gen.next();
    }, time);
  }

  function* test() {
    yield common(111, 1e3);
    yield common(222, 2e3);
    yield common(333, 3e3);
  }

  const gen = test();
  gen.next();
}

export function getData() {
  function getFeature() {
    setTimeout(() => {
      const result = "feature";
      console.log({ result });
      generator.next(result);
    }, 1e3);
  }

  function getAuth() {
    setTimeout(() => {
      const result = "auth";
      console.log({ result });
      generator.next(result);
    }, 2e3);
  }

  function getUser() {
    setTimeout(() => {
      const result = "user";
      console.log({ result });
      generator.next(result);
    }, 1e3);
  }

  function* gen() {
    yield getFeature();
    yield getAuth();
    yield getUser();
  }

  const generator = gen();

  generator.next(111);
}
