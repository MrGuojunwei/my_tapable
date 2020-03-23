// const { SyncWaterfallHook } = require('tapable');
const SyncWaterfallHook = require('../lib/SyncWaterfallHook');

let hooks = new SyncWaterfallHook(['name']);

hooks.tap('node', function (name) {
    console.log('node', name);
    return 'node';
})
hooks.tap('react', function (data) {
    console.log(data);
    return 'react';
})

hooks.tap('vue', function (data) {
    console.log(data);
    return 'vue';
})

hooks.call('aaa');