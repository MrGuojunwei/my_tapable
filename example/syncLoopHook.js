// const { SyncLoopHook } = require('tapable');
const SyncLoopHook = require('../lib/SyncLoopHook');
// 返回true触发循环 返回undefined终止循环

const hooks = new SyncLoopHook(['name']);
let i = 2;

hooks.tap('node', function (name) {
    console.log('node', name);
    i--;
    return i !== 0 ? true : undefined;
})
hooks.tap('react', function (name) {
    console.log('react', name);
})
hooks.call('aaa');