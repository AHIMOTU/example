(function (global) {
    "use strict";

    function MyPlugin () {
        // todo
    }

    MyPlugin.prototype = {
        // todo
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = MyPlugin
    } else if (typeof define === 'function') {
        define(function () {
            return MyPlugin
        })
    } else {
        global.MyPlugin = MyPlugin
    }
})(this)

console.log(typeof global === 'object' && (1337, eval)('this') === global)
console.log(typeof window === 'object' && (42, eval)('this') === window)