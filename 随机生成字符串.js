function fn1(len) {
    let str = Math.random().toString(36).substr(2)
    if (str.length > len) {
        return str.substr(0, len)
    }
    str += fn1(len - str.length)
    return str
}

console.log(fn1(5))
console.log(fn1(15))
