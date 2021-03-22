function preHandle(str = '') {
    str = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    return str
}
function fn1(str = '') {
    str = preHandle(str)
    return str === str.split('').reverse().join('')
}
function fn2(str = '') {
    let lp = 0,
        rp = str.length - 1
    while (lp <= rp) {
        if (str[lp++] !== str[rp--]) return false
    }
    return true
}
const str = 'abba1'
console.log(fn1(str))
console.log(fn2(str))