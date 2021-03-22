function fn1(str = '') {
    let arr = str.split('')
    arr.forEach((item, index) => {
        arr[index] = item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    })
    return arr.join('')
}
function fn2(str = '') {
    let arr = []
    for(let item of str) {
        let val = item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
        arr.push(val)
    }
    return arr.join('')
}
function fn3(str = '') {
    return str.replace(/([a-z]*)([A-Z]*)/g, (match, $1, $2) => {
        return $1.toUpperCase() + $2.toLowerCase()
    })
}
let str = 'aBaBaB'
console.log(fn1(str))
console.log(fn2(str))
console.log(fn3(str))