function fn(str = '') {
    return str.replace(/[\t\n]/g, '')
}
console.log(fn(`大量的开发\t空空导弹  了
埃里克的法律撒`))