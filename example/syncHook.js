
// let { SyncHook } = require('tapable');
const SyncHook = require('../lib/SyncHook');

let syncHook = new SyncHook(['name']);

// 注册
syncHook.tap('node', function (name) {
    console.log('node', name);
})
syncHook.tap('react', function (name) {
    console.log('react', name)
})
// 调用
syncHook.call('hook');