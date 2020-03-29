const SyncHook = require('./SyncHook');
const SyncBailHook = require('./SyncBailHook');
const SyncWaterfallHook = require('./SyncWaterfallHook');
const SyncLoopHook = require('./SyncLoopHook');
const AsyncParallelHook = require('./AsyncParallelHook');
const AsyncSeriesHook = require('./AsyncSeriesHook');
const AsyncSeriesWaterfallHook = require('./AsyncSeriesWaterfallHook');

module.exports = {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncSeriesHook,
    AsyncSeriesWaterfallHook
}