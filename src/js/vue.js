class Dep {
  static stack = [];
  static target = null;
  deps = null;
  constructor() {
    this.deps = new Set();
  }

  static pushTarget(t) {
    if (this.target) {
      this.stack.push(Dep.target);
    }
    this.target = t;
  }

  static popTarget() {
    this.target = this.stack.pop();
  }

  depend() {
    if (Dep.target) {
      this.deps.add(Dep.target);
    }
  }

  notify() {
    this.deps.forEach((item) => item.update());
  }
}

class Watcher {
  constructor(effect) {
    this.effect = effect;
    this.update();
  }

  update() {
    Dep.pushTarget(this);
    this.value = this.effect();
    Dep.popTarget();
    return this.value;
  }
}

function defineReactive(obj, key, val) {
  const dep = new Dep();
  Object.defineProperty(obj, key, {
    get() {
      dep.depend();
      return val;
    },
    set(newVal) {
      val = newVal;
      dep.notify();
    },
  });

  if (val && typeof val === "object") {
    reactive(val);
  }
}
// Observer
function reactive(obj) {
  if (obj && typeof obj === "object") {
    Object.keys(obj).forEach((key) => {
      defineReactive(obj, key, obj[key]);
    });
  }

  return obj;
}

const data = reactive({
  msg: "aaa",
});

new Watcher(() => {
  console.log("===> effect", data.msg);
});

setTimeout(() => {
  data.msg = "hello";
}, 1000);
