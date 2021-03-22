function fn1(left, right) {
    const rp = right.prototype
    while (true) {
        if (left === null) return false
        if (left === rp) return true
        left = left.__proto__
    }
}

function fn2(left, right) {
    if (typeof right[Symbol.hasInstance] === 'function') {
        return right[Symbol.hasInstance](left)
    } else {
        return right.prototype.isPrototypeOf(left)
    }
}

const arr = new Array(2)
console.log(fn1(arr, Array))
console.log(fn2(arr, Array))
console.log(fn1(1, Array))
console.log(fn2(1, Array))
console.log(arr.__proto__ instanceof Array)
console.log(fn1(arr.__proto__, Array)) // 有缺陷
console.log(fn2(arr.__proto__, Array))