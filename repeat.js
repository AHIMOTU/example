function repeat(str, times) {
    if (typeof String.prototype.repeat === 'function') {
        return str.repeat(times)
    } else {
        var arr = new Array(str)
        for (let i = 0; i < times; i++) {
            arr[i] = str
        }
        return arr.join('')
    }
}
console.log(repeat('abc', 3))