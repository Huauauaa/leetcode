// TODO
export default class Promise {
  constructor(executor) {
    this.status = "pending";
    this.data = undefined;
    this.callbacks = [];

    this.resolve = (value) => {
      if (this.status !== "pending") {
        return;
      }

      this.status = "resolved";
      this.data = value;

      setTimeout(() => {
        this.callbacks.forEach((cb) => {
          cb.onResolved(value);
        });
      });
    };

    this.reject = (reason) => {
      if (this.status !== "pending") {
        return;
      }

      this.status = "rejected";
      this.data = reason;

      setTimeout(() => {
        this.callbacks.forEach((cb) => {
          cb.onRejected(reason);
        });
      });
    };

    try {
      console.log(this, executor);
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }
}
