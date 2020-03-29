class SyncLoopHook {
    constructor(args) {
        this.tasks = [];
        this.args = args;
    }

    tap(name, callback) {
        this.tasks.push(callback);
    }

    call(...args) {
        args = args.slice(0, this.args.length);
        let ret;
        this.tasks.forEach(task => {
            do {
                ret = task(...args);
                if (ret === undefined) break;
            } while (ret === true);
        })
    }
}

module.exports = SyncLoopHook;