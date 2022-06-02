class EventEmitter {
  constructor() {
    this.cache = {};
  }

  on(name, fn) {
    if (!this.cache[name]) {
      this.cache[name] = [];
    }

    this.cache[name].push(fn);
  }

  off(name, fn) {
    const tasks = this.cache[name];
    if (!tasks) {
      return;
    }

    const index = tasks.findIndex(
      (item) => item === fn || item.callback === fn,
    );
    if (index > 0) {
      tasks.splice(index, 1);
    }
  }

  emit(name, once = false) {
    const tasks = this.cache[name];
    if (!tasks) {
      return;
    }

    for (let fn of tasks.slice()) {
      fn();
    }

    if (once) {
      delete this.cache[name];
    }
  }
}

const eventBus = new EventEmitter();

const task1 = () => {
  console.log("task1");
};

const task2 = () => {
  console.log("task2");
};

eventBus.on("task", task1);
eventBus.on("task", task2);

setTimeout(() => {
  eventBus.emit("task");
}, 1e3);
