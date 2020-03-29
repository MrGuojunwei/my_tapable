class AsyncParallelHook {
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
        let index = this.tasks.length;
        let cb = function () {
            index--;
            if (index === 0) {
                finalCallback();
            }
        }
        this.tasks.forEach(callback => {
            callback(...args, cb)
        })
    }
    tapPromise(name, callback) {
        this.tasks.push(callback);
    }
    promise(...args) { // 返回一个promise
        args = args.slice(0, this.args.length);
        return Promise.all(this.tasks.map(task => {
            return task(...args);
        }))
    }
}

module.exports = AsyncParallelHook;