// const { AsyncParallelHook } = require('tapable');
const { AsyncParallelHook } = require('../lib');

const hooks = new AsyncParallelHook(['name']);

hooks.tapPromise('node', function (name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('node', name)
            resolve();
        }, 1000)
    })

})
hooks.tapPromise('react', function (name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('react', name);
            resolve();
        }, 2000)
    })

})

hooks.promise('js').then(function () {
    console.log('ok');
})