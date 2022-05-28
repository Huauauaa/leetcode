function checkType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

function clone(obj) {
  if (checkType(obj) === "RegExp") {
    let temp = new RegExp(obj.source, obj.flags);
    temp.lastIndex = obj.lastIndex;
    return temp;
  }
  if (checkType(obj) === "Date") {
    return new Date(obj);
  }

  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  Reflect.ownKeys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      newObj[key] = deepClone(obj[key], hash);
    } else {
      // 直接赋值
      // newObj[key] = obj[key];
      // 是否应该保留属性描述符
      Object.defineProperty(
        newObj,
        key,
        Object.getOwnPropertyDescriptor(obj, key),
      );
    }
  });
}
