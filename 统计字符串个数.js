function fn1(str = '', target = '') {
    return str.split(target).length - 1
}
function fn2(str = '', target = '') {
    let reg = new RegExp(target, 'g')
    return str.match(reg).length
}
function fn3(str = '', target = '') {
    let num = 0
    while(str.indexOf(target) !== -1) {
        str = str.substr(str.indexOf(target) + target.length)
        num += 1
    }
    return num
}
let str = 'aabbccbbddbbeebbffbb'
let target = 'bb'
console.log(fn1(str, target))
console.log(fn2(str, target))
console.log(fn3(str, target))