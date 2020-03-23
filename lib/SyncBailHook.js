class SyncBailHook {
    constructor(args) {
        this.tasks = [];
        this.args = args;
    }
    tap(name, cb) {
        this.tasks.push(cb);
    }
    call(...args) {
        let val;
        args = args.slice(0, this.args.length);
        do {
            val = this.tasks.shift()(...args);
        } while (this.tasks.length !== 0 && val === undefined)
    }
}

module.exports = SyncBailHook;