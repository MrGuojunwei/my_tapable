
class SyncHook {
    constructor(args) { // 参数数组 
        this.tasks = [];
        this.args = args;
    }

    tap(name, task) {
        this.tasks.push(task);
    }

    call(...args) {
        args = args.slice(0, this.args.length);
        this.tasks.forEach(task => {
            task(...args);
        })
    }
}

module.exports = SyncHook;