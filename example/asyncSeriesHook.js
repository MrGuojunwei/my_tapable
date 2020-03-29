const { AsyncSeriesHook } = require('../lib');

const hooks = new AsyncSeriesHook(['name']);

// hooks.tapAsync('node', function (name, cb) {
//     setTimeout(function () {
//         console.log('node', name);
//         cb();
//     }, 1000)
// })

// hooks.tapAsync('react', function (name, cb) {
//     setTimeout(function () {
//         console.log('react', name);
//         cb();
//     }, 1000)
// })

// hooks.tapAsync('vue', function (name, cb) {
//     setTimeout(function () {
//         console.log('vue', name);
//         cb();
//     }, 1000)
// })

hooks.tapPromise('react', function (name) {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('react', name);
            resolve();
        }, 1000)
    })

})

hooks.tapPromise('vue', function (name) {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('vue', name);
            resolve();
        }, 1000)
    })

})

hooks.promise('jw').then(function () {
    console.log('end');
})