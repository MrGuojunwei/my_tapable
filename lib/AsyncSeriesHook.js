class AsyncSeriesHook {
    constructor(args) {
        this.tasks = [];
        this.args = args;
    }
    tapAsync(name, cb) {
        this.tasks.push(cb);
    }
    callAsync(...args) {
        const finalCallback = args.pop();
        args = args.slice(0, this.args.length);
        let task;
        const next = () => {
            if (this.tasks.length === 0) {
                finalCallback();
            } else {
                task = this.tasks.shift();
                task(...args, next);
            }
        }
        next();
    }
    tapPromise(name, callback) {
        this.tasks.push(callback);
    }
    promise(...args) {
        args = args.slice(0, this.args.length);
        const [first, ...others] = this.tasks;
        return others.reduce((task, next) => {
            return task.then(() => next(...args));
        }, first(...args))
    }

}

module.exports = AsyncSeriesHook;