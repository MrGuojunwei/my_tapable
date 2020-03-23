class SyncWaterfallHook {
    constructor(args) {
        this.tasks = [];
        this.args = args;
    }
    tap(name, cb)  {
        this.tasks.push(cb);
    }
    call(...args) {
        args = args.slice(0, this.args.length);
        let [first, ...other] = this.tasks;

        other.reduce((data, cb) => {
            return cb(data)
        }, first(...args))
    }
}

module.exports = SyncWaterfallHook;