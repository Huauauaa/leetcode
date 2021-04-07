export function parsePath(str) {
  const segments = str.split('.');

  return (obj) => {
    for (let i = 0, l = segments.length; i < l; i += 1) {
      if (!obj) {
        return;
      }
      obj = obj[segments[i]];
    }
    return obj;
  };
}
