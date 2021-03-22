function fn1 (str = '') {
    let pre = str[0]
    let res = str[0]
    let i = 0
    while (i < str.length) {
        const cur = str[i]
        i++;
        if (pre !== cur) {
            res += cur
            pre = cur
        }
    }
    return res
}

function fn2 (str = '') {
    return str.replace(/(.)\1*/g, '$1')
}

const str = 'aabbcccdee'
console.log(fn1(str))
console.log(fn2(str))