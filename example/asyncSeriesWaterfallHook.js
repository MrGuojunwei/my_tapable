const { AsyncSeriesWaterfallHook } = require('../lib');

const hooks = new AsyncSeriesWaterfallHook(['name']);

hooks.tapPromise('node', function (name) {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('node', name);
            resolve('node-resule');
        }, 1000)
    })

})

hooks.tapPromise('react', function (data) {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('react', data);
            resolve('react-result');
        }, 1000)
    })

})

hooks.promise('jw').then(function (data) {
    console.log('end', data);
})
