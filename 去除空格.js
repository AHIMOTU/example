function fn(str = '', type) {
    switch (type) {
        case 0: // 前
            str = str.replace(/^\s*/, '')
            break
        case 1: // 后
            str = str.replace(/\s*$/, '')
            break
        case 2: // 前后
            str = str.trim()
            break
        case 3: // 中间
            let left = str.match(/^\s*/)
            let right = str.match(/\s*$/)
            str = left + str.replace(/\s/g, '') + right
            break
        default: // 全部
            str = str.replace(/\s/g, '')
            break
    }
    return str
}
let str = '   d d  '
console.log('//' + str + '//')
console.log('//' + fn(str, 0) + '//')
console.log('//' + fn(str, 1) + '//')
console.log('//' + fn(str, 2) + '//')
console.log('//' + fn(str, 3) + '//')
console.log('//' + fn(str) + '//')