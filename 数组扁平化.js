function fn1(arr = []) {
    return arr.reduce((res, cur) => {
        return res.concat(Array.isArray(cur) ? fn1(cur) : cur)
    }, [])
}
function fn2(arr = []) {
    return arr.flat(Infinity)
}
function fn3(arr = []) {
    let res = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            res = res.concat(fn3(item))
        } else {
            res.push(item)
        }
    })
    return res
}
function fn4(arr = []) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
const data = [1, 2, [3, 4], [{ name: '5' }, 6]]
console.log(fn1(data))
// console.log(fn2(data))
console.log(fn3(data))
console.log(fn4(data))