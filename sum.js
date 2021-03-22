function sum(x, y) {
    if (typeof y === 'undefined') {
        return function (y) {
            return x + y
        }
    } else {
        return x + y
    }
}
console.log(sum(1, 2))
console.log(sum(1)(2))