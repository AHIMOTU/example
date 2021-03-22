/**
 * 
 * @param {*} len 
 * @param {*} type 0 纯数字 / 1 大写字符 + 数字 / 2 小写字母 + 数字
 */
function genPassword (len, type) {
    const items = [
        () => genRandom(48, 57), // unicode 48-57 数字0-9
        () => genRandom(65, 90), // unicode 76-90 大写英文字母
        () => genRandom(97, 122) // unicode 97-122 小写英文字母
    ]
    let res = ''
    for (let i = 0; i < len; i++) {
        const index = genRandom(0, type)
        const item = String.fromCharCode(items[index]())
        res += item
    }
    return res
}

function validate (password) {
    const level = ['弱', '普通', '较强', '强']
    const arr = []
    password.split('').forEach(item => {
        const unicode = item.charCodeAt()
        if (unicode >= 48 && unicode <= 57) {
            arr[0] = 1
        } else if (unicode >= 65 && unicode <= 90) {
            arr[1] = 1
        } else if (unicode >= 97 && unicode <= 122) {
            arr[2] = 1
        } else {
            arr[3] = 1
        }
    })
    const index = arr.reduce((total, cur) => total + cur, 0) - 1
    return level[index]
}

function genRandom (m, n) {
    return Math.floor(Math.random() * (n - m + 1)) + m
}

console.log(genPassword(8, 2));
console.log(validate('983eoo233'));