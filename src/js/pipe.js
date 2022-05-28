function pipe(fns) {
  return (args) => {
    return fns.reduce((res, cur) => {
      return cur(res);
    }, args);
  };
}
