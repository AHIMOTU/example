function fn1(str = '') {
    return str.split('-').map(item => {
        return item.substr(0, 1).toUpperCase() + item.substr(1)
    }).join('')
}
function fn2(str = '') {
    return str.split('-').reduce((total, current) => {
        return total + current.substr(0, 1).toUpperCase() + current.substr(1)
    }, '')
}
function fn3(str = '') {
    str = str.replace(/(\w)/, (match, $1) => $1.toUpperCase())
    // while(str.match(/\w-\w/)) {
    //     str = str.replace(/(\w)(-)(\w)/, (match, $1, $2, $3) => $1 + $3.toUpperCase())
    // }
    str = str.replace(/(\w)-(\w)/g, (match, $1, $2) => $1 + $2.toUpperCase())
    return str
}
let str = 'font-size-color'
console.log(fn1(str))
console.log(fn2(str))
console.log(fn3(str))