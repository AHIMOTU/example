function fn1(str = '', target) {
    let reg = new RegExp(`${target}(?=[^${target}]*$)`, 'g')
    return str.replace(reg, '')
}
function fn2(str = '', target) {
    let index = str.lastIndexOf(target)
    return str.substring(0, index) + str.substring(index + 1)
}
console.log(fn1('hello everyone', 'o'))
console.log(fn2('hello everyone', 'o'))