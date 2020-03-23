// const { SyncBailHook } = require('tapable');
const SyncBailHook = require('../lib/SyncBailHook');

const syncBailHook = new SyncBailHook(['name']);

syncBailHook.tap('node', function (name,age) {
    console.log('node', name, age);
})

syncBailHook.tap('react', function (name) {
    console.log('react', name);
})

syncBailHook.call('syncBailHook', 15)