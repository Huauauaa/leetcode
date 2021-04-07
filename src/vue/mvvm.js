// 订阅器模型
const Dep = {
  clientList: {},
  listen: function (key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
  },
  trigger: function () {
    const key = Array.prototype.shift.call(arguments),
      fns = this.clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    for (let i = 0, fn; (fn = fns[i++]); ) {
      fn.apply(this, arguments);
    }
  },
};

// 设置劫持方法, 对数据进行劫持
const DataHijack = function ({ data, tag, dataKey, selector }) {
  let value = "",
    el = document.querySelector(selector);
  // Data injack
  Object.defineProperty(data, dataKey, {
    get: function () {
      console.log("get value");
      return value;
    },
    set: function (newValue) {
      console.log("set value");
      value = newValue;
      Dep.trigger(tag, newValue);
    },
  });
  // bind observer
  Dep.listen(tag, function (text) {
    el.innerHTML = text;
  });
};

module.exports = Dep;
