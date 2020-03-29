class AsyncSeriesWaterfallHook {
    constructor(args) {
        this.tasks = [];
        this.args = args;
    }
    tapAsync(name, callback) {
        this.tasks.push(callback);
    }
    callAsync(...args) {
        const finalCallback = args.pop();
        args = args.slice(0, this.args.length);
        let index = 0;

        const next = (err, data) => {
            if (err) return finalCallback();

            let task = this.tasks[index];
            if (!task) return finalCallback();

            task(data, next);
            index++;
        }

        next(null, ...args);
    }

    tapPromise(name, callback) {
        this.tasks.push(callback);
    }

    promise(...args) {
        const [first, ...other] = this.tasks;
        args = args.slice(0, this.args.length);
        return other.reduce((task, next) => {
            return task.then((data) => {
                return next(data);
            })
        }, first(...args))
    }
}

module.exports = AsyncSeriesWaterfallHook;