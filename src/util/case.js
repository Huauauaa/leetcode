import _ from 'lodash';

function camelCase(str) {
  return _.camelCase(str);
  // return str.replace(/_([a-z])/g, (p, m) => m.toUpperCase());
}

export function toCamel(data) {
  if (typeof data === 'string') {
    return camelCase(data);
  }
  if (typeof data !== 'object' || !data) {
    return data;
  }
  if (Array.isArray(data)) {
    return data.map((item) => toCamel(item));
  }

  return Object.keys(data).reduce((res, key) => {
    let value = data[key];
    if (typeof value === 'object') {
      value = toCamel(value);
    }
    res[camelCase(key)] = value;
    return res;
  }, {});
}
